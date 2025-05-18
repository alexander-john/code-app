# PURPOSE: This Dockerfile defines a multi-stage build process for containerizing a React application.
# The first stage builds the React app using Node.js, and the second stage serves the built static files using Nginx.
# This approach ensures a smaller final image size and separates the build and runtime environments.

# Build phase
FROM node:18-alpine AS build
# WHAT: Specifies the base image for the build phase.
# WHY: The `node:18-alpine` image includes Node.js version 18, which is required to build the React app.
# HOW: The `FROM` instruction sets the base image for the build phase.

WORKDIR /app
# WHAT: Sets the working directory inside the container for the build phase.
# WHY: Ensures all subsequent commands are executed relative to the `/app` directory.
# HOW: The `WORKDIR` instruction creates the directory if it doesn't exist and sets it as the current working directory.

# Copy dependency manifests first for caching
COPY package*.json ./
# WHAT: Copies the `package.json` and `package-lock.json` files into the container.
# WHY: This allows Docker to cache the dependency installation step, improving build performance.
# HOW: The `COPY` instruction copies files from the host machine to the container.

RUN npm install
# WHAT: Installs the project dependencies inside the container.
# WHY: Ensures all required Node.js modules are installed for the build process.
# HOW: The `RUN` instruction executes the `npm install` command to install dependencies.

# Copy the rest of the application files
COPY . .
# WHAT: Copies the rest of the application files into the container.
# WHY: Adds the source code and other necessary files for the build process.
# HOW: The `COPY` instruction recursively copies files and directories from the host machine to the container.

# Build the Vite app
RUN npm run build
# WHAT: Builds the Vite application for production.
# WHY: Generates optimized static files (e.g., HTML, CSS, JS) for deployment.
# HOW: The `RUN` instruction executes the `npm run build` command, which creates the production build in the `dist` directory.

# Serve with Nginx
FROM nginx:1.23-alpine
# WHAT: Specifies the base image for the runtime phase.
# WHY: Nginx is used as a lightweight and efficient web server to serve the static files.
# HOW: The `FROM` instruction sets the base image for the runtime phase.

COPY --from=build /app/dist /usr/share/nginx/html
# WHAT: Copies the production build files from the build stage to the Nginx web server directory.
# WHY: Ensures the static files are served by Nginx.
# HOW: The `COPY --from=build` instruction copies files from the `build` stage to the `/usr/share/nginx/html` directory in the Nginx container.

COPY nginx.conf /etc/nginx/conf.d/default.conf
# WHAT: Copies the custom Nginx configuration file into the container.
# WHY: Allows customization of the Nginx server configuration.
# HOW: The `COPY` instruction copies the `nginx.conf` file from the host machine to the `/etc/nginx/conf.d/default.conf` directory in the Nginx container.

# Expose port 80
EXPOSE 80
# WHAT: Exposes port 80 for the Nginx server.
# WHY: Allows the container to accept HTTP traffic on port 80.
# HOW: The `EXPOSE` instruction documents the port that the container listens on.

# Add a health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1
# WHAT: Adds a health check to the container.
# WHY: Ensures the container is running and serving the application correctly.
# HOW: The `HEALTHCHECK` instruction defines the command to run and the parameters for the health check.

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
# WHAT: Specifies the command to run when the container starts.
# WHY: Starts the Nginx server in the foreground to serve the application.
# HOW: The `CMD` instruction runs the `nginx` command with the `-g "daemon off;"` option to keep the server running.
