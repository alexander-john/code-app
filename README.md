# Code App

A full-stack code learning platform with a React (Vite) frontend and a Python (FastAPI) backend.

## 🚀 Getting Started

### Prerequisites

- **Node.js** (for frontend)
- **Python 3.8+** (for backend)
- **Docker** (optional, for running code challenges securely)
- **Git**

## 🖥️ Frontend (Vite + React)

1. **Navigate to the frontend directory:**
   ```sh
   cd client
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173)

## 🐍 Backend (FastAPI)

1. **Navigate to the backend directory:**
   ```sh
   cd backend
   ```

2. **(Recommended) Create and activate a virtual environment:**
   ```sh
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies:**
   ```sh
   pip install fastapi uvicorn docker
   ```

4. **Run the backend server:**
   ```sh
   uvicorn main:app --reload
   ```

5. **API will be available at:**  
   [http://localhost:8000](http://localhost:8000)

## 📝 Notes

- Update the backend and frontend URLs as needed if you deploy to production.
- For development, the frontend may need to be configured to talk to the backend (CORS, API URL).
