const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a product name"],
    trim: true,
    maxlength: [45, "product name length should be less than 45 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please provide the product price"],
  },
  image: {
    type: String,
    required: [true, "please provide product image"],
  },
});

module.exports = mongoose.model("products", ProductSchema);
