import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from '../models/User.js'
import Product from '../models/Product.js'

dotenv.config()

const sampleUsers = [
  {
    username: 'ecofriendly_sarah',
    email: 'sarah@example.com',
    password: 'password123'
  },
  {
    username: 'green_living_mike',
    email: 'mike@example.com',
    password: 'password123'
  },
  {
    username: 'sustainable_anna',
    email: 'anna@example.com',
    password: 'password123'
  }
]

const sampleProducts = [
  {
    title: 'Vintage Wooden Bookshelf',
    description: 'Beautiful vintage wooden bookshelf in excellent condition. Perfect for organizing books, plants, or decorative items. Made from solid oak wood.',
    category: 'Furniture',
    price: 85.00,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    isAvailable: true
  },
  {
    title: 'Organic Cotton T-Shirt',
    description: 'Soft, comfortable organic cotton t-shirt. Size M, worn only a few times. Great for casual wear or working out.',
    category: 'Clothing',
    price: 12.50,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
    isAvailable: true
  },
  {
    title: 'Garden Tools Set',
    description: 'Complete set of garden tools including spade, rake, and pruning shears. Perfect for maintaining your garden or starting a new one.',
    category: 'Home & Garden',
    price: 35.00,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
    isAvailable: true
  },
  {
    title: 'Sustainable Living Book',
    description: '"Zero Waste Home" by Bea Johnson. Excellent condition, no marks or highlights. Great resource for sustainable living.',
    category: 'Books',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d6f5a?w=400&h=300&fit=crop',
    isAvailable: true
  },
  {
    title: 'Bamboo Phone Case',
    description: 'Eco-friendly bamboo phone case for iPhone 12. Lightweight, durable, and biodegradable. Minimal wear.',
    category: 'Electronics',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
    isAvailable: true
  },
  {
    title: 'Yoga Mat',
    description: 'Non-toxic, eco-friendly yoga mat. Excellent grip and cushioning. Used for home practice, in great condition.',
    category: 'Sports & Outdoors',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
    isAvailable: true
  }
]

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecofinds')
    console.log('Connected to MongoDB')

    // Clear existing data
    await User.deleteMany({})
    await Product.deleteMany({})
    console.log('Cleared existing data')

    // Create users
    const users = await User.insertMany(sampleUsers)
    console.log(`Created ${users.length} users`)

    // Create products with random sellers
    const productsWithSellers = sampleProducts.map(product => ({
      ...product,
      seller: users[Math.floor(Math.random() * users.length)]._id
    }))

    const products = await Product.insertMany(productsWithSellers)
    console.log(`Created ${products.length} products`)

    console.log('\n✅ Database seeded successfully!')
    console.log('\nTest accounts:')
    users.forEach(user => {
      console.log(`- ${user.username} (${user.email}) - password: password123`)
    })

  } catch (error) {
    console.error('❌ Seeding failed:', error)
  } finally {
    await mongoose.connection.close()
    console.log('Database connection closed')
  }
}

// Run seeder if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedDatabase()
}

export default seedDatabase
