const fs = require('fs');
const Question = require('../models/questionModel');
const { writeUserCodeWithTest } = require('../utils/fileUtils');
const { runDockerContainer } = require('../services/dockerService');

const submitCode = async (req, res) => {
    try {
        const { userCode, questionId } = req.body;

        if (!userCode || !questionId) {
            return res.status(400).json({ error: 'Missing code or question ID' });
        }

        const question = await Question.findById(questionId);
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }

        const { functionName, testCases } = question; // 👈 this line must be here

        const results = [];

        for (const testCase of testCases) {
            const { input, expectedOutput } = testCase;

            const { filePath, fileName } = writeUserCodeWithTest(userCode, input, functionName);
            const rawOutput = await runDockerContainer(filePath);

            const lines = rawOutput.trim().split('\n');
            const output = lines.reverse().find(line => line.trim() !== '');


            // cleanup
            try {
                fs.unlinkSync(filePath);
            } catch (err) {
                console.error('Failed to delete temp file:', fileName, err);
            }

            results.push({
                input,
                expectedOutput,
                output,
                passed: output === expectedOutput
            });
        }

        res.json({ results });
    } catch (err) {
        console.error('Execution error:', err);
        res.status(500).json({ error: err.toString() });
    }
};

module.exports = { submitCode };
