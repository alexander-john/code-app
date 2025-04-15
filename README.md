# 🚀 Code App: Full Stack Code Execution Platform

Code App is a full stack application for executing user-submitted code securely in Dockerized Node.js containers. The backend (Node.js + Express) handles code execution and question management, while the React frontend communicates with the backend. MongoDB is used for data persistence, and the app supports CI/CD pipelines with containerized execution.

---

## 🌐 Live URLs

- **Frontend (React)**: [https://code-app-frontend.netlify.app](https://code-app-frontend.netlify.app)  
- **Backend API (Express)**: [https://api.codeapp.example.com](https://api.codeapp.example.com)

---

## 🏗 Project Structure

```bash
code-app/
├── client/          # React frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── .env
├── docker/
│   └── node-runner/ # Docker environment for code execution
│       ├── Dockerfile
│       └── run.js
├── server/          # Node.js backend
│   ├── controllers/ # API controllers
│   ├── routes/      # API routes
│   ├── services/    # Docker interaction and business logic
│   ├── utils/       # Utility functions
│   ├── config/      # Config files (CORS, DB, environment, etc.)
│   ├── index.js     # Main entry point
│   ├── package.json
│   └── .env
└── README.md        # Project documentation
```

---

## 🧰 Tech Stack

### Frontend
- React (using Vite for builds)  
- React Router for page routing  
- Axios for HTTP requests  
- Environment variables via `.env`  
- Hosted on **Netlify**  

### Backend
- Node.js + Express.js  
- MongoDB via Mongoose  
- Middleware:
  - `express.json()` for JSON parsing
  - `cors` for cross-origin access
  - `dotenv` for environment variables
- Hosted on **DigitalOcean Droplet** (or similar VPS)

### Dockerized Code Runner
- Node.js (Alpine-based) Docker image
- Sandbox execution using the `vm` module
- Rebuilt/rerun for user-submitted code

### Database
- MongoDB (local or hosted on MongoDB Atlas)
- Secure connection string stored in `.env`

---

## 🚀 Getting Started

### Prerequisites
1. [Node.js](https://nodejs.org/)  
2. [Docker](https://www.docker.com/)  
3. [MongoDB](https://www.mongodb.com/)

---

### 1. Install Dependencies

#### Backend
```bash
cd server
npm install
```

#### Frontend
```bash
cd client
npm install
```

---

### 2. Build Docker Image

```bash
cd docker/node-runner
docker build -t node-runner .
```
This image will be used by your backend to execute code in an isolated environment.

---

### 3. Configure Environment Variables

#### Server (.env)
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/code-app
NODE_ENV=development
```

#### Client (.env)
```
VITE_API_URL=http://localhost:5000
```

---

### 4. Run the Backend

```bash
cd server
node index.js
```
The server will start on `http://localhost:5000`.

---

### 5. Run the Frontend

```bash
cd client
npm start
```
The frontend will run on `http://localhost:3000`.

---

## ⚙️ Key Features

1. **Docker-Based Code Execution**  
   Safely runs user-submitted code in a sandboxed Node.js Docker container.

2. **Question Management**  
   CRUD for programming questions, including database persistence via MongoDB.

3. **Frontend Integration**  
   A React-powered interface allowing users to submit code and view execution results.

4. **Security and Isolation**  
   Each execution runs in a separate container, limiting potential security risks.

---

## 🔐 Environment Variables

- **Backend**:  
  `PORT`, `MONGO_URI`, `NODE_ENV`
- **Frontend**:  
  `VITE_API_URL`

*(Add any additional variables required for your CI/CD or production environment.)*

---

## 🛠 Deployment

### Backend Deployment
- Hosted on a VPS (e.g., DigitalOcean Droplet)  
- Use PM2 for process management  
- Use Nginx as a reverse proxy (port 80/443 forwarding to 5000)  

### Frontend Deployment
- Hosted on Netlify (or similar)  
- Build command: `npm run build`  
- Set `VITE_API_URL` in the environment variables for production  

---

## 📦 CI/CD Flow

You can configure GitHub Actions or another CI/CD tool to:
1. Build and test code on each push.  
2. Deploy the backend to your server (e.g., via SSH + PM2 restart).  
3. Deploy the frontend to Netlify by triggering an automatic build.

```text
  [ GitHub Push ]
         ↓
 [ CI Builds + Tests ]
         ↓
 [ Deploy to Droplet ]
         ↓
 [ PM2 Restart ]
         ↓
     [ Backend ]
        ↑
   NGINX Reverse Proxy
        ↑
   [ Client on Netlify ]
        ↑
   [ User Browser ]
```

---