const dotenv = require('dotenv');

// Determine the environment (default: development)
const env = process.env.NODE_ENV || 'development';

// Load the appropriate .env file
dotenv.config({ path: `.env.${env}` });

// Export the environment for use in other parts of the app
module.exports = env;