const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
    title: String,
    slug: { type: String, unique: true }, // NEW
    parentSubtopicSlug: String
});


module.exports = mongoose.model('Feature', featureSchema);
