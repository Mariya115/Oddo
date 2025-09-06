import React from 'react'
import { Link } from 'react-router-dom'
import { Leaf, Recycle, Users, ShoppingBag } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-blue-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Welcome to <span className="text-yellow-300">EcoFinds</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 font-light leading-relaxed">
              Your sustainable marketplace for second-hand goods. Give items a second life and reduce waste.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/products" className="bg-white text-green-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                🌱 Browse Products
              </Link>
              <Link to="/register" className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105">
                🛍️ Start Selling
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-gray-800">
              Why Choose <span className="text-green-600">EcoFinds</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of eco-conscious individuals making a positive impact on the planet
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Recycle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Sustainable Living</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Extend the lifecycle of products and reduce environmental impact by buying and selling pre-owned items.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Community Driven</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Join a community of environmentally conscious individuals working together for a better future.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShoppingBag className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Easy Trading</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Simple and secure platform for buying and selling with built-in cart and purchase management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8">
            Ready to Start Your <span className="text-yellow-300">Sustainable Journey</span>?
          </h2>
          <p className="text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of users who are already making a difference by choosing sustainable consumption.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/register" className="bg-white text-green-700 px-12 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              🚀 Get Started Today
            </Link>
            <Link to="/products" className="border-2 border-white text-white px-12 py-4 rounded-xl font-bold text-xl hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105">
              🔍 Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold">EcoFinds</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Making sustainability accessible to everyone through our innovative second-hand marketplace.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Browse Products</Link></li>
                <li><Link to="/register" className="text-gray-400 hover:text-white transition-colors">Start Selling</Link></li>
                <li><Link to="/login" className="text-gray-400 hover:text-white transition-colors">Login</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 EcoFinds. Making sustainability accessible to everyone. 🌱
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
