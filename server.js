const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/db');

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDb();

// Initialize express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/test', require('./routes/testRoute'));

app.get('/', (req, res) => {
  return res.status(200).send('Welcome to the server');
});

// Port configuration
const Port = process.env.PORT || 8080;

// Start server
app.listen(Port, () => {
  console.log(`Server is running on ${Port}`);
});

module.exports = connectDb;
