const mongoose = require('mongoose');

const subtopicSchema = new mongoose.Schema({
    title: String,
    slug: { type: String, unique: true }, // NEW
    parentTopicSlug: String               // (better than ID now)
});


module.exports = mongoose.model('Subtopic', subtopicSchema);
