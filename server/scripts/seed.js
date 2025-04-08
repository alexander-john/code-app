// Import required modules and the Question model
require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');
const Question = require('../models/questionModel');

console.log('Mongo URI:', process.env.MONGO_URI);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected for seeding'))
    .catch(err => {
        console.error('MongoDB connection error', err);
        process.exit(1);
    });

// Sample questions to seed
const sampleQuestions = [
    {
        title: 'Find Maximum',
        description: 'Write a function to find the maximum of two numbers.',
        functionName: 'findMax',
        starterCode: `function findMax(a, b) {
  // Write your code here
}`,
        testCases: [
            { input: '5, 10', expectedOutput: '10' },
            { input: '-1, -5', expectedOutput: '-1' },
        ],
        createdAt: new Date(),
    },
    {
        title: 'Add Two Numbers',
        description: 'Write a function to return the sum of two numbers.',
        functionName: 'add',
        starterCode: `function add(a, b) {
  // Write your code here
}`,
        testCases: [
            { input: '2, 3', expectedOutput: '5' },
            { input: '10, 20', expectedOutput: '30' },
        ],
        createdAt: new Date(),
    },
    {
        title: 'Is Even',
        description: 'Write a function to check if a number is even.',
        functionName: 'isEven',
        starterCode: `function isEven(n) {
  // Write your code here
}`,
        testCases: [
            { input: '4', expectedOutput: 'true' },
            { input: '7', expectedOutput: 'false' },
        ],
        createdAt: new Date(),
    },
    {
        title: 'Square Number',
        description: 'Write a function that returns the square of a number.',
        functionName: 'square',
        starterCode: `function square(n) {
  // Write your code here
}`,
        testCases: [
            { input: '3', expectedOutput: '9' },
            { input: '5', expectedOutput: '25' },
        ],
        createdAt: new Date(),
    },
    {
        title: 'Reverse String',
        description: 'Write a function to reverse a string.',
        functionName: 'reverseString',
        starterCode: `function reverseString(str) {
  // Write your code here
}`,
        testCases: [
            { input: '"hello"', expectedOutput: 'olleh' },
            { input: '"world"', expectedOutput: 'dlrow' },
        ],
        createdAt: new Date(),
    },
];

// Function to seed the database
const seedQuestions = async () => {
    try {
        // Remove existing questions if needed
        await Question.deleteMany();
        console.log('Existing questions removed');

        // Insert the sample questions
        await Question.insertMany(sampleQuestions);
        console.log('Sample questions seeded successfully!');

        // Close the database connection
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding questions:', error);
        mongoose.connection.close();
    }
};

seedQuestions();