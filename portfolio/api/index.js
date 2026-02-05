require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('../server/config/db');

// Initialize app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', require('../server/routes/projects'));
app.use('/api/contact', require('../server/routes/contact'));
app.use('/api/profile', require('../server/routes/profile'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Export for Vercel serverless
module.exports = app;
