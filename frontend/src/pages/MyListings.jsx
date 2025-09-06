import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Edit, Trash2, Plus, Eye } from 'lucide-react'
import axios from 'axios'

const MyListings = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchMyProducts()
  }, [])

  const fetchMyProducts = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/products/user/my-products')
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching products:', error)
      setError('Failed to load your products')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (productId) => {
    if (!window.confirm('Are you sure you want to delete this product?')) {
      return
    }

    try {
      await axios.delete(`/products/${productId}`)
      setProducts(products.filter(product => product._id !== productId))
    } catch (error) {
      console.error('Error deleting product:', error)
      setError('Failed to delete product')
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Listings</h1>
        <Link
          to="/add-product"
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add New Product
        </Link>
      </div>

      {error && (
        <div className="text-red-600 text-center bg-red-50 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      {products.length === 0 ? (
        <div className="text-center py-12">
          <Plus className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products yet</h3>
          <p className="text-gray-600 mb-6">Start by adding your first product to the marketplace</p>
          <Link to="/add-product" className="btn-primary">
            Add Your First Product
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product._id} className="card hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 line-clamp-2">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="text-lg font-bold text-primary-600">${product.price}</p>
                <p className="text-sm text-gray-500">
                  Listed {new Date(product.createdAt).toLocaleDateString()}
                </p>
                
                <div className="flex gap-2 pt-2">
                  <Link
                    to={`/product/${product._id}`}
                    className="flex-1 text-center py-2 px-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-1"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </Link>
                  <button
                    onClick={() => {/* TODO: Implement edit functionality */}}
                    className="px-3 py-2 bg-eco-600 text-white rounded-lg hover:bg-eco-700 transition-colors"
                    title="Edit Product"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    title="Delete Product"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyListings
