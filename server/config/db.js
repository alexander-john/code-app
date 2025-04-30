const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected to database:', mongoose.connection.name);
};

module.exports = connectDB;
