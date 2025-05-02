// PURPOSE: This file defines the configuration for the Vite build tool, which is used to bundle and serve the frontend application during development and production. 
// It includes settings for plugins, module resolution, development server options, and proxying API requests.

import { defineConfig } from 'vite'
// WHAT: Imports the `defineConfig` function from Vite.
// WHY: This function is used to define the configuration for the Vite build tool in a structured and validated way.
// HOW: The `import` statement loads the `defineConfig` function from the Vite package, which is used to export the configuration object.

import react from '@vitejs/plugin-react'
// WHAT: Imports the React plugin for Vite.
// WHY: This plugin enables support for React features like JSX and fast refresh during development.
// HOW: The `import` statement loads the React plugin from the `@vitejs/plugin-react` package.

import path from 'path'
// WHAT: Imports the `path` module from Node.js.
// WHY: The `path` module is used to handle and resolve file paths in the configuration, such as setting up aliases.
// HOW: The `import` statement loads the built-in `path` module, which is used to resolve paths for aliases.

export default defineConfig({
// WHAT: Exports the Vite configuration object.
// WHY: This configuration object is used by Vite to set up the build and development environment.
// HOW: The `export default` statement exports the configuration object so Vite can use it during the build and development process.

  plugins: [react()],
  // WHAT: Specifies the plugins to be used by Vite.
  // WHY: The React plugin is added to enable React-specific features like JSX and fast refresh.
  // HOW: The `plugins` array includes the `react()` function, which initializes the React plugin for Vite.

  resolve: {
    alias: {
      '@codemirror/state': path.resolve(__dirname, 'node_modules/@codemirror/state'),
      '@codemirror/view': path.resolve(__dirname, 'node_modules/@codemirror/view'),
    },
  },
  // WHAT: Configures module resolution, including aliases for specific modules.
  // WHY: Aliases simplify imports and ensure the correct versions of `@codemirror` modules are used in the project.
  // HOW: The `resolve.alias` object maps module names (e.g., `@codemirror/state`) to specific paths in the `node_modules` directory using `path.resolve`.

  server: {
    host: true,
    // WHAT: Configures the development server to be accessible externally.
    // WHY: This allows the development server to be accessed from external devices (e.g., on the local network).
    // HOW: The `host: true` option enables the server to listen on all network interfaces.

    port: 5173,
    // WHAT: Specifies the port number for the development server.
    // WHY: The default Vite port is 5173, and this ensures the server listens on that port.
    // HOW: The `port` option sets the port number for the server to listen on.

    proxy: {
      '/api': 'http://backend:5000'
    }
    // WHAT: Configures a proxy for API requests.
    // WHY: This forwards API requests from the frontend (`/api`) to the backend server running on `http://backend:5000`.
    // HOW: The `proxy` object maps the `/api` path to the backend server URL, enabling seamless communication between the frontend and backend during development.
  }
})
