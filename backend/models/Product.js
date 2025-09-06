import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Electronics',
      'Clothing',
      'Home & Garden',
      'Books',
      'Sports & Outdoors',
      'Toys & Games',
      'Furniture',
      'Automotive',
      'Beauty & Health',
      'Other'
    ]
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/300x200?text=No+Image'
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

export default mongoose.model('Product', productSchema)
