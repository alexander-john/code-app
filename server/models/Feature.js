const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
  title: String,
  parentSubtopicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subtopic'
  }
});

module.exports = mongoose.model('Feature', featureSchema);
