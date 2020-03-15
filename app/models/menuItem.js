const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const MenuItem = mongoose.model("Example", menuItemSchema);
module.exports = MenuItem;
