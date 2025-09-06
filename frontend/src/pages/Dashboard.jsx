import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'
import { User, Package, ShoppingCart, ShoppingBag, Plus, Eye } from 'lucide-react'

const Dashboard = () => {
  const { user } = useAuth()
  const { getCartItemCount, purchases } = useCart()

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.username}!</h1>
        <p className="text-gray-600 mt-2">Manage your sustainable marketplace activities</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center">
            <div className="p-2 bg-primary-100 rounded-lg">
              <Package className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">My Listings</p>
              <p className="text-2xl font-semibold text-gray-900">0</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-2 bg-eco-100 rounded-lg">
              <ShoppingCart className="h-6 w-6 text-eco-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Cart Items</p>
              <p className="text-2xl font-semibold text-gray-900">{getCartItemCount()}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <ShoppingBag className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Purchases</p>
              <p className="text-2xl font-semibold text-gray-900">{purchases.length}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <User className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Profile</p>
              <p className="text-2xl font-semibold text-gray-900">Active</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <Link
              to="/add-product"
              className="flex items-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
            >
              <Plus className="h-6 w-6 text-primary-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Add New Product</p>
                <p className="text-sm text-gray-600">List an item for sale</p>
              </div>
            </Link>
            
            <Link
              to="/my-listings"
              className="flex items-center p-4 bg-eco-50 rounded-lg hover:bg-eco-100 transition-colors"
            >
              <Package className="h-6 w-6 text-eco-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Manage Listings</p>
                <p className="text-sm text-gray-600">View and edit your products</p>
              </div>
            </Link>
            
            <Link
              to="/products"
              className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <Eye className="h-6 w-6 text-green-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Browse Products</p>
                <p className="text-sm text-gray-600">Discover sustainable items</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {purchases.length > 0 ? (
              purchases.slice(0, 3).map((purchase, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <ShoppingBag className="h-5 w-5 text-green-600 mr-3" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{purchase.title}</p>
                    <p className="text-sm text-gray-600">Purchased for ${purchase.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No recent activity</p>
                <p className="text-sm text-gray-400">Start by browsing products or adding your own!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
