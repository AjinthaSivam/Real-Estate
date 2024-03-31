const mongoose = require('mongoose');

const landSchema = new mongoose.Schema({
    name: String,
    address: String,
    sqft: Number,
    description: String,
    price: Number,
    contact: String,
    image: String
})

const Land = mongoose.model('Land', landSchema);

module.exports = Land;