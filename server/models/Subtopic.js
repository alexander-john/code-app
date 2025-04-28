const mongoose = require('mongoose');

const subtopicSchema = new mongoose.Schema({
  title: String,
  parentTopicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic'
  }
});

module.exports = mongoose.model('Subtopic', subtopicSchema);
