// Load environment variables from .env files based on NODE_ENV (default to .env.development)
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import custom route handlers
const questionRoutes = require('./routes/questionRoutes');
const codeRoute = require('./routes/codeRoutes');

// Determine the environment and load corresponding .env file
const env = process.env.NODE_ENV || 'development';
dotenv.config({path: `.env.${env}`});

// Initialize Express app
const app = express();

// Setup CORS based on environment
const corsOptions = env === 'development' ? {} : {
    origin: 'https://code-app-client.netlify.app', methods: ['GET', 'POST'], credentials: true,
};

// Configure CORS: allow all in development, restrict in production
if (env === 'development') {
    app.use(cors()); // Allow requests from any origin in development
} else {
    app.use(cors({
        origin: "https://code-app-client.netlify.app", // Frontend domain in production
        methods: ["GET", "POST"], // Allowed HTTP methods
        credentials: true, // Enable credentials (cookies, etc.)
    }));
}

// Parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Mongo error', err));

// Use question and code API routes
app.use('/api/questions', questionRoutes); // Handles question-related routes
app.use('/api/code', codeRoute); // Handles code submission and evaluation

// Start the Express server on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
