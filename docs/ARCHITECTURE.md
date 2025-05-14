# 🧠 Architecture Documentation

## Overview

**Project Name**: Code App  
**Description**: A full-stack educational application that teaches programming concepts through interactive questions and a code execution environment.

---

## Tech Stack

* **Frontend**: React + Vite
* **Backend**: Node.js + Express
* **Database**: MongoDB (Cloud or Local)
* **Containerization**: Docker + Docker Compose

---

## High-Level Architecture

```
               +--------------------+
               |  React Frontend    |
               |  (Vite + JS/HTML)  |
               +---------+----------+
                         |
                         v
               +--------------------+
               | Express Backend    |
               |  (Node.js Server)  |
               +---------+----------+
                         |
          +--------------+--------------+
          |                             |
          v                             v
+-------------------+        +------------------------+
|   MongoDB Atlas    |        |   Docker Code Runner   |
| (Question & Users) |        | (Isolated JS Sandbox)  |
+-------------------+        +------------------------+
```

---

## Frontend

* Built with **React + Vite**
* Containerized using Docker
* Handles:
  * Question display
  * Code editor interface
  * Submitting code to backend
* Talks to backend via RESTful API endpoints
* Environment config via `.env` files:
  * `.env.development` for local development
  * `.env.production` for production builds
* Default Ports:
  * **Development**: Runs on port `5173` (default Vite port) unless overridden
  * **Dockerized**: Exposed on port `80` via `docker-compose.yml`

---

## Backend

* Built with **Node.js + Express**
* Containerized using Docker
* Responsibilities:
  * Serve questions and topics
  * Accept and evaluate code submissions
  * Act as bridge between frontend, database, and execution service
* Uses modular route files (`questionRoutes.js`, `codeRoutes.js`, etc.)
* Environment-based configuration using `.env`:
  * `MONGO_URI`: MongoDB connection string
  * `PORT`: Port for the backend server (default: `5000`)
* Default Ports:
  * **Development**: Runs on port `5000`
  * **Dockerized**: Exposed on port `5000` via `docker-compose.yml`

---

## Database

* **MongoDB** (hosted on Atlas or local)
* Collections:
  * `questions`: question metadata and test cases
  * `topics`: high-level categories
  * `subtopics`: nested under topics
  * `features`: learning features per subtopic
* Connection string configured via `MONGO_URI` in `.env` files

---

## Code Execution Service

* Located in `/docker/node-runner`
* Runs submitted JavaScript inside Docker container (`run.js`)
* Output is returned to backend
* Designed for security:
  * No network access
  * Limited resources
  * Executed in isolated environments
* Future Enhancements:
  * Add support for additional languages (e.g., Python, C++)

---

## Docker & Compose

* Services defined in `docker-compose.yml`:
  * `client`: React frontend (Dockerized)
  * `server`: backend API (Dockerized)
  * `node-runner`: code execution engine (Dockerized)
  * `mongo`: MongoDB database
* Default Ports:
  * **Frontend**: Exposed on port `80` (mapped to container port `80`)
  * **Backend**: Exposed on port `5000`
  * **MongoDB**: Exposed on port `27017`
* Allows simple one-command startup:
  ```bash
  docker compose up --build
  ```
* Supports consistent development environments and local testing with isolated containers

---

## Environment Modes

The application determines its environment mode based on the build process and `.env` files:
* **Development Mode**:
  * Frontend: Uses `.env.development` and runs on port `5173` (or port `80` in Docker).
  * Backend: Uses `.env.development` and runs on port `5000`.
* **Production Mode**:
  * Frontend: Built with `npm run build` and served via Nginx on port `80`.
  * Backend: Uses `.env.production` and runs on port `5000`.

---

## Design Decisions

* **Why React + Vite?**
  * Vite offers fast build times and modern tooling for React development.
* **Why Docker?**
  * Ensures consistent environments across development and production.
  * Simplifies dependency management and deployment.
* **Why MongoDB?**
  * Flexible schema design for storing questions, topics, and user data.
* **Why Nginx?**
  * Lightweight and efficient for serving static files in production.

---

## Future Enhancements

* Add support for more languages (Python, C++)
* Add user accounts and progress tracking
* Improve test case visualization in frontend
* CI/CD integration for test and deployment pipelines
* Add monitoring and logging for production environments
