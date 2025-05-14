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

### 4. Running the Development Environment

Once the setup is complete, follow these steps to run the app in development mode:

#### Using Docker (Recommended)
1. Start the app with Docker Compose:
   ```bash
   docker compose up --build
   ```
2. Access the frontend in your browser at [http://localhost](http://localhost).  
   - **Why port 80?**: The `docker-compose.yml` file maps port `80` on your host machine to port `80` inside the container where the frontend is running. This makes the app accessible at the default HTTP port (`80`), so you don't need to specify a port in the URL.

#### Without Docker (Manual Setup)
1. Start the backend server:
   ```bash
   cd server
   npm install
   npm run dev
   ```
   The backend will run on [http://localhost:5000](http://localhost:5000).

2. Start the frontend:
   ```bash
   cd client
   npm install
   npm run dev
   ```
   The frontend will run on [http://localhost:5173](http://localhost:5173) (default Vite port).  
   - **Why port 5173?**: When running the frontend manually, Vite's development server defaults to port `5173` unless otherwise configured.

3. Ensure the `.env.development` files are properly configured for both the server and client.

---

Now you can develop and test the app locally!

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

