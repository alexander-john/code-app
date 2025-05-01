const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    title: String,
    slug: { type: String, unique: true } // NEW
});


module.exports = mongoose.model('Topic', topicSchema);
