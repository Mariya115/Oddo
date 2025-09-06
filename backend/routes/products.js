import express from 'express'
import { body, validationResult } from 'express-validator'
import Product from '../models/Product.js'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()

// Get all products
router.get('/', async (req, res) => {
  try {
    const { category, search, page = 1, limit = 12 } = req.query
    const query = { isAvailable: true }

    // Add category filter
    if (category && category !== 'all') {
      query.category = category
    }

    // Add search filter
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ]
    }

    const skip = (page - 1) * limit
    const products = await Product.find(query)
      .populate('seller', 'username')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))

    const total = await Product.countDocuments(query)

    res.json({
      products,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / limit),
        totalProducts: total,
        hasNext: page * limit < total,
        hasPrev: page > 1
      }
    })
  } catch (error) {
    console.error('Get products error:', error)
    res.status(500).json({ message: 'Server error fetching products' })
  }
})

// Get single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate('seller', 'username email')

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.json(product)
  } catch (error) {
    console.error('Get product error:', error)
    res.status(500).json({ message: 'Server error fetching product' })
  }
})

// Create new product
router.post('/', authenticateToken, [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('category').isIn([
    'Electronics', 'Clothing', 'Home & Garden', 'Books', 'Sports & Outdoors',
    'Toys & Games', 'Furniture', 'Automotive', 'Beauty & Health', 'Other'
  ]).withMessage('Invalid category'),
  body('price').isNumeric().withMessage('Price must be a number'),
  body('price').isFloat({ min: 0 }).withMessage('Price must be positive')
], async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg })
    }

    const { title, description, category, price, image } = req.body

    const product = new Product({
      title,
      description,
      category,
      price,
      image: image || 'https://via.placeholder.com/300x200?text=No+Image',
      seller: req.user.id
    })

    await product.save()
    await product.populate('seller', 'username')

    res.status(201).json({
      message: 'Product created successfully',
      product
    })
  } catch (error) {
    console.error('Create product error:', error)
    res.status(500).json({ message: 'Server error creating product' })
  }
})

// Update product
router.put('/:id', authenticateToken, [
  body('title').optional().notEmpty().withMessage('Title cannot be empty'),
  body('description').optional().notEmpty().withMessage('Description cannot be empty'),
  body('category').optional().isIn([
    'Electronics', 'Clothing', 'Home & Garden', 'Books', 'Sports & Outdoors',
    'Toys & Games', 'Furniture', 'Automotive', 'Beauty & Health', 'Other'
  ]).withMessage('Invalid category'),
  body('price').optional().isNumeric().withMessage('Price must be a number'),
  body('price').optional().isFloat({ min: 0 }).withMessage('Price must be positive')
], async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg })
    }

    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    // Check if user owns the product
    if (product.seller.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this product' })
    }

    const { title, description, category, price, image } = req.body

    if (title) product.title = title
    if (description) product.description = description
    if (category) product.category = category
    if (price !== undefined) product.price = price
    if (image) product.image = image

    await product.save()
    await product.populate('seller', 'username')

    res.json({
      message: 'Product updated successfully',
      product
    })
  } catch (error) {
    console.error('Update product error:', error)
    res.status(500).json({ message: 'Server error updating product' })
  }
})

// Delete product
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    // Check if user owns the product
    if (product.seller.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to delete this product' })
    }

    await Product.findByIdAndDelete(req.params.id)

    res.json({ message: 'Product deleted successfully' })
  } catch (error) {
    console.error('Delete product error:', error)
    res.status(500).json({ message: 'Server error deleting product' })
  }
})

// Get user's products
router.get('/user/my-products', authenticateToken, async (req, res) => {
  try {
    const products = await Product.find({ seller: req.user.id })
      .populate('seller', 'username')
      .sort({ createdAt: -1 })

    res.json(products)
  } catch (error) {
    console.error('Get user products error:', error)
    res.status(500).json({ message: 'Server error fetching user products' })
  }
})

export default router
