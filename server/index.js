// Load environment configuration (ensures dotenv is loaded)
require('./config/env');

const express = require('express');
const cors = require('cors');

/* // Import custom route handlers
const questionRoutes = require('./routes/questionRoutes'); // Routes for managing questions
const codeRoute = require('./routes/codeRoutes'); // Routes for code submission and evaluation
const topicRoutes = require('./routes/topicRoutes'); // Routes for managing topics
 */

const topicRoutes = require('./routes/topicRoutes');
const subtopicRoutes = require('./routes/subtopicRoutes');
const featureRoutes = require('./routes/featureRoutes');

// Import database connection utility
const connectDB = require('./config/db');

// Import CORS configuration
const getCorsOptions = require('./config/corsConfig');

// Initialize the Express app
const app = express();

// Configure CORS policy
const corsOptions = getCorsOptions(process.env.NODE_ENV);
app.use(cors(corsOptions));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Register topic-related API routes
// app.use('/api/topics', topicRoutes); // Endpoints for topic-related operations

// Connect to MongoDB and start the server
connectDB()
    .then(() => {
        /* // Register API routes
        app.use('/api/questions', questionRoutes); // Endpoints for question-related operations
        app.use('/api/code', codeRoute); // Endpoints for code execution and evaluation
        */
       
        app.use('/topics', topicRoutes);
        app.use('/subtopics', subtopicRoutes);
        app.use('/features', featureRoutes);


        // Start the server on the specified port (default: 5000)
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
        // Handle database connection errors
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Exit the process with a failure code
    });


