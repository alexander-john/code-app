const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('Topic', topicSchema);