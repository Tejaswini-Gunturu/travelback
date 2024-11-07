import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';  // Correctly using import for your db connection

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Tour Management!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
