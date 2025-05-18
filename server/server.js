require('./config/env');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const topicRoutes = require('./routes/topicRoutes');
const subtopicRoutes = require('./routes/subtopicRoutes');
const featureRoutes = require('./routes/featureRoutes');
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests

// Connect to MongoDB
connectDB();

// Routes
app.use('/topics', topicRoutes);
app.use('/subtopics', subtopicRoutes);
app.use('/features', featureRoutes);

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

