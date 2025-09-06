#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🌱 Setting up EcoFinds...\n');

// Create backend .env file if it doesn't exist
const backendEnvPath = path.join(__dirname, 'backend', '.env');
if (!fs.existsSync(backendEnvPath)) {
  const envContent = `# Database
MONGODB_URI=mongodb://localhost:27017/ecofinds

# JWT Secret (use a strong secret in production)
JWT_SECRET=ecofinds_super_secret_jwt_key_2024_make_it_very_secure

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000`;

  fs.writeFileSync(backendEnvPath, envContent);
  console.log('✅ Created backend/.env file');
} else {
  console.log('ℹ️  backend/.env file already exists');
}

// Install dependencies
console.log('\n📦 Installing dependencies...\n');

try {
  console.log('Installing root dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('\nInstalling frontend dependencies...');
  execSync('cd frontend && npm install --legacy-peer-deps', { stdio: 'inherit' });
  
  console.log('\nInstalling backend dependencies...');
  execSync('cd backend && npm install', { stdio: 'inherit' });
  
  console.log('\n🎉 Setup complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Make sure MongoDB is running on your system');
  console.log('2. Run: npm run dev');
  console.log('3. Open http://localhost:3000 in your browser');
  console.log('\n💡 If you don\'t have MongoDB installed:');
  console.log('- Install MongoDB Community Edition');
  console.log('- Or use MongoDB Atlas (cloud) and update the MONGODB_URI in backend/.env');
  
} catch (error) {
  console.error('❌ Setup failed:', error.message);
  process.exit(1);
}
