const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes');

const app = express();
const PORT = 3002;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/userServiceDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB for user-service'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`User Service is running on http://localhost:${PORT}`);
});
