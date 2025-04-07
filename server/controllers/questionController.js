const Question = require('../models/questionModel'); // Import the Question model

// Controller to fetch all questions
const getQuestions = async (req, res) => {
    try {
        const questions = await Question.find(); // Fetch all questions from the database
        res.json(questions); // Send them as a JSON response
    } catch (error) {
        res.status(500).json({ message: 'Error fetching questions', error });
    }
};

// Controller to fetch a question by its ID
const getQuestionById = async (req, res) => {
    const { id } = req.params;
    try {
        const question = await Question.findById(id); // Fetch the question by its ID
        if (!question) {
            return res.status(404).json({ message: 'No question found' });
        }
        res.json(question);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching question', error });
    }
};

module.exports = {
    getQuestions,
    getQuestionById,
};