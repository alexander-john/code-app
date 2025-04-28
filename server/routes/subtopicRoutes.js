const express = require('express');
const router = express.Router();
const Feature = require('../models/Feature');

// GET /subtopics/:subtopicId/features — get features for a subtopic
router.get('/:subtopicId/features', async (req, res) => {
  const features = await Feature.find({ parentSubtopicId: req.params.subtopicId }).lean();
  res.json(features);
});

module.exports = router;
