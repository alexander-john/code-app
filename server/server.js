// Load environment configuration (ensures dotenv is loaded)
require('./config/env');
// WHY: This ensures that environment variables (e.g., database credentials, API keys) are loaded from a `.env` file into `process.env`.
// HOW: The `require` statement imports and executes the `env` configuration file, which likely uses the `dotenv` package to load variables.

// Import dependencies
const express = require('express');
// WHY: Express is a web framework for Node.js that simplifies building APIs and web servers.
// HOW: The `require` statement imports the Express library, which is used to create the server.

const cors = require('cors');
// WHY: CORS (Cross-Origin Resource Sharing) middleware allows your server to handle requests from different origins, which is essential for APIs accessed by front-end apps hosted on different domains.
// HOW: The `require` statement imports the `cors` middleware.

const connectDB = require('./config/db');
// WHY: This function connects your application to a MongoDB database.
// HOW: The `require` statement imports the `connectDB` function from the `db` configuration file, which likely uses a library like `mongoose` to establish the connection.

// Import routes
const topicRoutes = require('./routes/topicRoutes');
// WHY: This imports the routes for handling requests related to "topics".
// HOW: The `require` statement loads the `topicRoutes` module, which defines the endpoints for "topics".

const subtopicRoutes = require('./routes/subtopicRoutes');
// WHY: This imports the routes for handling requests related to "subtopics".
// HOW: The `require` statement loads the `subtopicRoutes` module, which defines the endpoints for "subtopics".

const featureRoutes = require('./routes/featureRoutes');
// WHY: This imports the routes for handling requests related to "features".
// HOW: The `require` statement loads the `featureRoutes` module, which defines the endpoints for "features".

// Initialize the Express app
const app = express();
// WHY: This creates an instance of an Express application, which is the main object used to define routes and middleware.
// HOW: The `express()` function initializes the app object.

// Middleware
app.use(cors()); // Enable CORS
// WHY: This middleware enables Cross-Origin Resource Sharing, allowing your API to be accessed from different origins.
// HOW: The `app.use()` method applies the `cors` middleware globally to all routes.

app.use(express.json()); // Parse JSON requests
// WHY: This middleware parses incoming JSON payloads, making the data available in `req.body`.
// HOW: The `app.use()` method applies the `express.json()` middleware globally to all routes.

// Connect to MongoDB
connectDB();
// WHY: This establishes a connection to the MongoDB database, ensuring the app can interact with it.
// HOW: The `connectDB()` function is called, which likely uses a library like `mongoose` to connect to the database using credentials from environment variables.

// Routes
app.use('/topics', topicRoutes);
// WHY: This sets up a route for handling requests to `/topics` using the `topicRoutes` module.
// HOW: The `app.use()` method maps the `/topics` path to the `topicRoutes` router.

app.use('/subtopics', subtopicRoutes);
// WHY: This sets up a route for handling requests to `/subtopics` using the `subtopicRoutes` module.
// HOW: The `app.use()` method maps the `/subtopics` path to the `subtopicRoutes` router.

app.use('/features', featureRoutes);
// WHY: This sets up a route for handling requests to `/features` using the `featureRoutes` module.
// HOW: The `app.use()` method maps the `/features` path to the `featureRoutes` router.

// Start the server
const PORT = process.env.PORT || 5000;
// WHY: This determines the port number on which the server will listen for incoming requests. It uses the `PORT` environment variable if available, or defaults to 5000.
// HOW: The `process.env.PORT` retrieves the port from the environment, and the `||` operator provides a fallback value.

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// WHY: This starts the server and listens for incoming requests on the specified port. The callback logs a message to indicate the server is running.
// HOW: The `app.listen()` method binds the server to the specified port and executes the callback function once the server is ready.


