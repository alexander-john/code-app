const express = require('express');
const router = express.Router();

// Mock database or data source
const features = [
  {
    slug: 'quiz-app',
    title: 'Quiz App',
    type: 'quiz',
    description: 'A quiz application for testing knowledge on programming topics.',
    data: {
      questions: [
        { id: 1, question: 'What is React?', options: ['Library', 'Framework'], answer: 'Library' },
        { id: 2, question: 'What is JSX?', options: ['JavaScript', 'XML-like syntax'], answer: 'XML-like syntax' },
      ],
    },
  },
  {
    slug: 'code-editor',
    title: 'Code Editor',
    type: 'code-editor',
    description: 'An interactive code editor for solving programming challenges.',
    data: {
      starterCode: 'function add(a, b) {\n  // Write your code here\n}',
    },
  },
];

// Route to get feature details by slug
router.get('/features/:featureSlug', (req, res) => {
  const { featureSlug } = req.params;

  // Find the feature by slug
  const feature = features.find((f) => f.slug === featureSlug);

  if (!feature) {
    return res.status(404).json({ error: 'Feature not found' });
  }

  res.json(feature);
});

module.exports = router;
