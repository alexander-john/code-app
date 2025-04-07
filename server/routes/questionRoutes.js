const express = require('express');
const router = express.Router();
const { getQuestions, getQuestionById } = require('../controllers/questionController');

router.get('/', getQuestions);                // GET /api/questions
router.get('/:id', getQuestionById);          // GET /api/questions/:id

module.exports = router;
