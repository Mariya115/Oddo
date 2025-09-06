import React from 'react'
import { useCart } from '../contexts/CartContext'
import { ShoppingBag, ArrowLeft, Calendar } from 'lucide-react'

const PreviousPurchases = () => {
  const { purchases } = useCart()

  if (purchases.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-gray-600 hover:text-primary-600 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>

        <div className="text-center py-12">
          <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No purchases yet</h2>
          <p className="text-gray-600 mb-6">Your completed purchases will appear here</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => window.history.back()}
        className="flex items-center text-gray-600 hover:text-primary-600 mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back
      </button>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">Previous Purchases</h1>

      <div className="space-y-6">
        {purchases.map((purchase, index) => (
          <div key={`${purchase._id}-${index}`} className="card">
            <div className="flex gap-4">
              <img
                src={purchase.image}
                alt={purchase.title}
                className="w-24 h-24 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{purchase.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{purchase.category}</p>
                <p className="text-lg font-bold text-primary-600">${purchase.price}</p>
                <p className="text-sm text-gray-500">
                  Quantity: {purchase.quantity}
                </p>
              </div>

              <div className="flex flex-col items-end">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Purchased today</span>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">
                    ${(purchase.price * purchase.quantity).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">Total</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Purchase Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-primary-600">{purchases.length}</p>
            <p className="text-sm text-gray-600">Total Orders</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary-600">
              {purchases.reduce((total, item) => total + item.quantity, 0)}
            </p>
            <p className="text-sm text-gray-600">Total Items</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary-600">
              ${purchases.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
            </p>
            <p className="text-sm text-gray-600">Total Spent</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviousPurchases
