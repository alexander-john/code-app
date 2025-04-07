const express = require('express');
const router = express.Router();
const { submitCode } = require('../controllers/codeController');

// Your existing frontend uses this route
router.post('/submit', submitCode);

module.exports = router;
