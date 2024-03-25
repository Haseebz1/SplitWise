
const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Connect to MongoDB
db.once('open', () => {
  console.log('Connected to MongoDB');
  // Use routes
  app.use('/api', routes);

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
