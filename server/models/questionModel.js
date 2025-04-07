const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Title is mandatory
    },
    description: {
        type: String,
        required: true, // Description is mandatory
    },
    starterCode: {
        type: String, // Starter code for the question
        required: false, // Optional field (can be set to `true` if needed)
    },
    functionName: { type: String, required: true },
    testCases: [
        {
            input: {
                type: String, // Input for the test case
                required: true, // Mandatory for each test case
            },
            expectedOutput: {
                type: String, // Expected output for the test case
                required: true, // Mandatory for each test case
            },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now, // Automatically sets the creation date
    },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;