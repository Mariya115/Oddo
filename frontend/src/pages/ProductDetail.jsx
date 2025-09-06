import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ShoppingCart, ArrowLeft, User } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import axios from 'axios'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchProduct()
  }, [id])

  const fetchProduct = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`/products/${id}`)
      setProduct(response.data)
    } catch (error) {
      console.error('Error fetching product:', error)
      setError('Product not found')
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart(product)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/products')}
          className="btn-primary"
        >
          Back to Products
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-primary-600 mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                {product.category}
              </span>
              <div className="flex items-center text-gray-600">
                <User className="h-4 w-4 mr-1" />
                <span>by {product.seller?.username}</span>
              </div>
            </div>
            <p className="text-4xl font-bold text-primary-600">${product.price}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          <div className="pt-6">
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
          </div>

          {/* Product Info */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Product Information</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Category:</span>
                <span>{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Price:</span>
                <span className="font-semibold text-primary-600">${product.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Seller:</span>
                <span>{product.seller?.username}</span>
              </div>
              <div className="flex justify-between">
                <span>Listed:</span>
                <span>{new Date(product.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
