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
* Environment config via `.env.development`

---

## Backend

* Built with **Node.js + Express**
* Containerized using Docker
* Responsibilities:

  * Serve questions and topics
  * Accept and evaluate code submissions
  * Act as bridge between frontend, database, and execution service
* Uses modular route files (`questionRoutes.js`, `codeRoutes.js`, etc.)
* Environment-based configuration using `.env`

---

## Database

* **MongoDB** (hosted on Atlas or local)
* Collections:

  * `questions`: question metadata and test cases
  * `topics`: high-level categories
  * `subtopics`: nested under topics
  * `features`: learning features per subtopic

---

## Code Execution Service

* Located in `/docker/node-runner`
* Runs submitted JavaScript inside Docker container (`run.js`)
* Output is returned to backend
* Designed for security:

  * No network access
  * Limited resources
  * Executed in isolated environments

---

## Docker & Compose

* Services defined in `docker-compose.yml`:

  * `client`: React frontend (Dockerized)
  * `server`: backend API (Dockerized)
  * `node-runner`: code execution engine (Dockerized)
* Allows simple one-command startup:

  ```bash
  docker compose up --build
  ```
* Supports consistent development environments and local testing with isolated containers

---

## Future Enhancements

* Add support for more languages (Python, C++)
* Add user accounts and progress tracking
* Improve test case visualization in frontend
* CI/CD integration for test and deployment pipelines
