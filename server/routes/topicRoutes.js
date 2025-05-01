const express = require('express');
const router = express.Router();
const Topic = require('../models/TemptTopic');
const Subtopic = require('../models/Subtopic');

// GET /topics — get all topics
router.get('/', async (req, res) => {
  const topics = await Topic.find().lean();
  console.log("Fetched topics:", topics);
  res.json(topics);
});

// GET /topics/:topicId/subtopics — get subtopics for a topic
router.get('/:topicSlug/subtopics', async (req, res) => {
  const subtopics = await Subtopic.find({ parentTopicSlug: req.params.topicSlug }).lean();
  res.json(subtopics);
});

module.exports = router;
