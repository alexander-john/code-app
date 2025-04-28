const express = require('express');
const router = express.Router();
const Topic = require('../models/Topic');
const Subtopic = require('../models/Subtopic');

// GET /topics — get all topics
router.get('/', async (req, res) => {
  const topics = await Topic.find().lean();
  res.json(topics);
});

// GET /topics/:topicId/subtopics — get subtopics for a topic
router.get('/:topicId/subtopics', async (req, res) => {
  const subtopics = await Subtopic.find({ parentTopicId: req.params.topicId }).lean();
  res.json(subtopics);
});

module.exports = router;
