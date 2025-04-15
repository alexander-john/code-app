// Function to get CORS options based on the environment
const getCorsOptions = (env) => {
    if (env === 'development') {
        return {}; // Allow unrestricted access in development
    }
    return {
        origin: 'https://code-app-client.netlify.app',
        methods: ['GET', 'POST'],
        credentials: true,
    };
};

module.exports = getCorsOptions;