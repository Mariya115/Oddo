# MongoDB Setup Guide for EcoFinds

## 🚨 Current Issue
The application is ready but needs MongoDB to be running. Here are your options:

## Option 1: MongoDB Atlas (Cloud - Recommended for Quick Start)

### Step 1: Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Sign up for a free account
3. Create a new cluster (choose the free tier)

### Step 2: Get Connection String
1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<password>` with your database user password

### Step 3: Update Environment
Update `backend/.env` file:
```env
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/ecofinds?retryWrites=true&w=majority
```

## Option 2: Local MongoDB Installation

### Windows Installation
1. Download MongoDB Community Server from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Run the installer
3. Choose "Complete" installation
4. Install MongoDB as a Windows Service
5. Start the MongoDB service

### Start MongoDB Service
```bash
# Open Command Prompt as Administrator
net start MongoDB
```

### Verify Installation
```bash
mongosh
```

## Option 3: Docker (If you have Docker installed)
```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

## 🚀 After MongoDB is Running

### 1. Start the Backend
```bash
cd backend
npm run dev
```

### 2. Start the Frontend (in a new terminal)
```bash
cd frontend
npm run dev
```

### 3. Seed Sample Data (Optional)
```bash
cd backend
npm run seed
```

## ✅ Verify Everything Works

1. **Backend Health Check**: http://localhost:5000/api/health
2. **Frontend**: http://localhost:3000
3. **Test Registration**: Create a new account
4. **Test Products**: Add some products

## 🔧 Troubleshooting

### MongoDB Connection Issues
- Check if MongoDB service is running
- Verify the connection string in `.env`
- Check firewall settings
- Ensure port 27017 is not blocked

### Common Solutions
```bash
# Check if MongoDB is running
netstat -an | findstr 27017

# Restart MongoDB service
net stop MongoDB
net start MongoDB
```

## 📱 Test Accounts (After Seeding)
- `ecofriendly_sarah` (sarah@example.com) - password: password123
- `green_living_mike` (mike@example.com) - password: password123
- `sustainable_anna` (anna@example.com) - password: password123

## 🎉 You're Ready!
Once MongoDB is running, your EcoFinds application will be fully functional with:
- User authentication
- Product management
- Shopping cart
- Database persistence
- Sample data for testing
