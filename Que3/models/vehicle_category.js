var mongoose = require("mongoose");

var vehicleCategorySchema = mongoose.Schema({
    categoryName: { type: String, trim: true }
})

module.exports = mongoose.model('Category', vehicleCategorySchema);