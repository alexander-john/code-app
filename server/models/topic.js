const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  title: String
});

module.exports = mongoose.model('Topic', topicSchema);
