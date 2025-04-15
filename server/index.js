// Load environment variables from the appropriate .env file based on NODE_ENV (default: .env.development)
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

// Import custom route handlers
const questionRoutes = require('./routes/questionRoutes'); // Routes for managing questions
const codeRoute = require('./routes/codeRoutes'); // Routes for code submission and evaluation

// Import database connection utility
const connectDB = require('./config/db');

// Determine the environment (default: development) and load corresponding .env file
const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

// Initialize the Express app
const app = express();

// Function to configure CORS options based on the environment
function getCorsOptions(env) {
    if (env === 'development') {
        return {}; // Allow unrestricted access in development
    }
    return {
        origin: 'https://code-app-client.netlify.app',
        methods: ['GET', 'POST'],
        credentials: true,
    };
}

// Configure CORS policy
const corsOptions = getCorsOptions(env);
app.use(cors(corsOptions));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB and start the server
connectDB()
    .then(() => {
        // Register API routes
        app.use('/api/questions', questionRoutes); // Endpoints for question-related operations
        app.use('/api/code', codeRoute); // Endpoints for code execution and evaluation

        // Start the server on the specified port (default: 5000)
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
        // Handle database connection errors
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Exit the process with a failure code
    });


