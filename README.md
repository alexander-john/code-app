# 🧠 Code App

An educational full stack MERN app for learning programming topics through interactive content.

---

## 📆 Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB (Atlas)
- **Containerization**: Docker + Docker Compose

---

## ⚙️ System Requirements

- [Node.js](https://nodejs.org/) v18+
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🚀 Local Development Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/code-app.git
cd code-app
```

### 2. Create `.env.development` files

#### `/server/.env.development`
```env
MONGO_URI=<your_local_or_atlas_uri>
PORT=5000
```

#### `/client/.env.development`
```env
VITE_API_URL=http://localhost:5000
```

### 3. Start the app locally with Docker

```bash
docker compose up --build
```

---

## 🌐 Production Deployment

Your app is deployed to a **DigitalOcean droplet** using **GitHub Actions**.

### CI/CD Setup (in `.github/workflows/deploy.yml`):

1. On every `push` to `main`, GitHub:
   - SSHs into the droplet
   - Pulls the latest code
   - Rebuilds Docker containers with `--no-cache`

### Production `.env.production` values:

#### `/server/.env.production`
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/?retryWrites=true&w=majority&appName=questions-cluster
PORT=5000
```

#### `/client/.env.production`
```env
VITE_API_URL=http://<droplet-ip>:5000
```

---

## 🐳 Docker Compose Services

```yaml
services:
  server:
    build: ./server
    ports:
      - "5000:5000"
    volumes:
      - ./server:/app
    env_file:
      - ./server/.env.production
    depends_on:
      - mongo

  frontend:
    build: ./client
    ports:
      - "80:80"
    depends_on:
      - server

  mongo:
    image: mongo:6
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

