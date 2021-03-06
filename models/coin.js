const mongoose = require('mongoose');

var coinModel = mongoose.Schema({
    name: String,
    country: String,
    value: Number,
    value_us: Number,
    year: Number,
    review: String,
    isAvailable: Number,
    img: String
});

module.exports = mongoose.model('coin', coinModel);
