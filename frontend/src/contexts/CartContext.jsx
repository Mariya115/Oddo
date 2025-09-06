import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [purchases, setPurchases] = useState([])

  useEffect(() => {
    // Load cart and purchases from localStorage on mount
    const savedCart = localStorage.getItem('cartItems')
    const savedPurchases = localStorage.getItem('purchases')
    
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
    if (savedPurchases) {
      setPurchases(JSON.parse(savedPurchases))
    }
  }, [])

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    // Save purchases to localStorage whenever it changes
    localStorage.setItem('purchases', JSON.stringify(purchases))
  }, [purchases])

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item._id === product._id)
      if (existingItem) {
        return prev.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item._id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item._id === productId
            ? { ...item, quantity }
            : item
        )
      )
    }
  }

  const clearCart = () => {
    setCartItems([])
  }

  const checkout = () => {
    // Move cart items to purchases
    setPurchases(prev => [...prev, ...cartItems])
    setCartItems([])
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const value = {
    cartItems,
    purchases,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    checkout,
    getCartTotal,
    getCartItemCount
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
