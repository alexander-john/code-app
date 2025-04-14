// Load environment variables from .env files based on NODE_ENV (default to .env.development)
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

// Import custom route handlers
const questionRoutes = require('./routes/questionRoutes');
const codeRoute = require('./routes/codeRoutes');

// Import configuration utilities
const connectDB = require('./config/db');

// Determine the environment and load corresponding .env file
const env = process.env.NODE_ENV || 'development';
dotenv.config({path: `.env.${env}`});

// Initialize Express app
const app = express();

// Setup CORS based on environment
const corsOptions = env === 'development' ? {} : {
    origin: 'https://code-app-client.netlify.app', methods: ['GET', 'POST'], credentials: true,
};

// Configure CORS policy dynamically based on environment
// Allows unrestricted access in development; restricts to frontend origin in production
app.use(cors(corsOptions));

// Parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB()
    .then(() => {
        // Use question and code API routes
        app.use('/api/questions', questionRoutes); // Handles question-related routes
        app.use('/api/code', codeRoute); // Handles code submission and evaluation

        // Start the Express server on the specified port
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

    })
    .catch((err) => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    });


