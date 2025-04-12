const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const questionRoutes = require('./routes/questionRoutes');
const codeRoute = require('./routes/codeRoutes');

const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

const app = express();

if (env === 'development') {
    app.use(cors()); // allow all in dev
} else {
    app.use(cors({
        origin: "https://code-app-client.netlify.app",
        methods: ["GET", "POST"],
        credentials: true,
    }));
}

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Mongo error', err));

app.use('/api/questions', questionRoutes);
app.use('/api/code', codeRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
