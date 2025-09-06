import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ProductFeed from './pages/ProductFeed'
import ProductDetail from './pages/ProductDetail'
import AddProduct from './pages/AddProduct'
import MyListings from './pages/MyListings'
import Cart from './pages/Cart'
import PreviousPurchases from './pages/PreviousPurchases'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<ProductFeed />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/add-product" 
                  element={
                    <ProtectedRoute>
                      <AddProduct />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/my-listings" 
                  element={
                    <ProtectedRoute>
                      <MyListings />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/cart" 
                  element={
                    <ProtectedRoute>
                      <Cart />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/purchases" 
                  element={
                    <ProtectedRoute>
                      <PreviousPurchases />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </main>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
