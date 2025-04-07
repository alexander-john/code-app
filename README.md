# Code App

This is a full stack application designed to execute code using a Dockerized Node.js environment. The backend is built with Node.js and Express, and the app supports isolated code execution through Docker containers. A React frontend provides the user interface for interacting with the backend.

---

## 🧱 Project Structure

```
code-app/
├── client/                # React frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── .env
├── docker/
│   └── node-runner/
│       ├── Dockerfile
│       └── run.js
├── server/                # Node.js backend
│   ├── index.js
│   ├── package.json
│   └── .env
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

---

### 📦 Install Dependencies

#### Backend:
```bash
cd server
npm install
```

#### Frontend:
```bash
cd client
npm install
```

---

### 🐳 Build Docker Image

```bash
cd docker/node-runner
docker build -t node-runner .
```

---

### 🌐 Run the Server

Create a `.env` file inside the `server/` directory:

```
PORT=5000
```

Then run:

```bash
cd server
node index.js
```

The server should start on `http://localhost:5000`.

---

### 📂 Run the Client

Create a `.env` file inside the `client/` directory if needed. Then start the React app:

```bash
cd client
npm start
```

This will run the frontend on `http://localhost:3000`.

Make sure the backend server is running and accessible at the expected endpoint.

---