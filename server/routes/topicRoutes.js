const express = require('express');
const router = express.Router();
const Topic = require('../models/topic'); // Mongoose model for the "topics" collection

// Route to fetch all topics
router.get('/', async (req, res) => {
    try {
        const topics = await Topic.find(); // Fetch all topics from the database
        res.status(200).json(topics);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch topics', details: err.message });
    }
});

module.exports = router;