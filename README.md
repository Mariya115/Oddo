# EcoFinds – Sustainable Second-Hand Marketplace

## 📖 Overview

EcoFinds is a prototype platform that empowers users to buy and sell pre-owned goods, encouraging sustainable consumption and reducing waste. It provides a desktop and mobile-friendly application where users can register, log in, manage profiles, list products, browse items, and shop responsibly through a cart and purchase system.

## 🎯 Vision

To foster a culture of sustainability by extending the lifecycle of products, reducing waste, and offering a convenient, trusted marketplace for second-hand items.

## 🚀 Mission

To develop a user-friendly and engaging web application that connects buyers and sellers efficiently, promoting a circular economy while ensuring trust and community.

## 🔑 Core Features

### 1. User Authentication
- Register with email, password, and username
- Secure login/logout using JWT

### 2. Profile Management
- Basic user dashboard
- View and edit profile fields (username, email)

### 3. Product Listings
- Create new listings with title, description, category, price, and image
- Manage Listings (CRUD): View, edit, and delete products

### 4. Product Browsing
- View product feed with search and category filters
- Product detail view with full information

### 5. Shopping Features
- Add products to cart
- View cart in card format with product info
- Checkout functionality
- Previous purchases tracking

## 🛠️ Tech Stack

- **Frontend**: React (Vite) + TailwindCSS
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Auth**: JWT
- **Styling**: TailwindCSS with custom design system

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)

### Installation

1. **Install dependencies**
   ```bash
   # Frontend
   cd frontend
   npm install --legacy-peer-deps
   
   # Backend
   cd ../backend
   npm install
   ```

2. **Set up MongoDB**
   - **Option A**: Install MongoDB locally (see MONGODB_SETUP.md)
   - **Option B**: Use MongoDB Atlas (cloud) - recommended for quick start

3. **Start the application**
   ```bash
   # Option 1: Use the start script (Windows)
   start.bat
   
   # Option 2: Manual start
   # Terminal 1 - Backend
   cd backend
   npm run dev
   
   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

### Alternative: Run Frontend and Backend Separately

**Frontend only:**
```bash
cd frontend
npm install
npm run dev
```

**Backend only:**
```bash
cd backend
npm install
npm run dev
```

## 📱 Features Implemented

### ✅ Phase 1: Authentication & Dashboard
- User registration and login
- JWT-based authentication
- Protected routes
- User dashboard with stats

### ✅ Phase 2: Product Management
- Create, read, update, delete products
- Product categories
- Image handling (placeholder support)
- My Listings page

### ✅ Phase 3: Browsing & Cart
- Product feed with search and filters
- Product detail pages
- Shopping cart functionality
- Responsive design

### ✅ Phase 4: Checkout & Purchases
- Checkout process
- Previous purchases tracking
- Order summary

## 🎨 Design System

The application uses a custom design system built with TailwindCSS:

- **Primary Colors**: Green-based palette for sustainability theme
- **Eco Colors**: Blue-based palette for environmental elements
- **Components**: Reusable button, input, and card components
- **Responsive**: Mobile-first design approach

## 📁 Project Structure

```
EcoFinds/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── contexts/        # React contexts (Auth, Cart)
│   │   ├── pages/          # Page components
│   │   └── App.jsx         # Main app component
│   └── package.json
├── backend/                 # Node.js backend
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   └── server.js           # Main server file
└── package.json            # Root package.json
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Products
- `GET /api/products` - Get all products (with search/filter)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (auth required)
- `PUT /api/products/:id` - Update product (auth required)
- `DELETE /api/products/:id` - Delete product (auth required)
- `GET /api/products/user/my-products` - Get user's products (auth required)

## 🌱 Sustainability Features

- **Circular Economy**: Encourages reuse of products
- **Waste Reduction**: Extends product lifecycles
- **Community Building**: Connects like-minded individuals
- **Environmental Impact**: Promotes conscious consumption

## 🚀 Deployment

### Frontend (Netlify)
1. Build the frontend: `cd frontend && npm run build`
2. Deploy the `dist` folder to Netlify

### Backend (Render/Heroku)
1. Set environment variables in your hosting platform
2. Deploy the backend folder
3. Update frontend API URLs to point to production backend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with React, Node.js, and MongoDB
- Styled with TailwindCSS
- Icons by Lucide React
- Inspired by sustainable living principles
