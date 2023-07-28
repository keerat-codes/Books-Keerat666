const mongoose = require('mongoose');

const BookNamesSchema = new mongoose.Schema({
BookName : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('BookNames', BookNamesSchema);