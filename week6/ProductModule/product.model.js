const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  available: Boolean,
  category: { type: String, enum: ["FOOD", "PC", "CLOTH"] },
  price: Number,
  name: String,
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
