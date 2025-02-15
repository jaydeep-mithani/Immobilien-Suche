const mongoose = require("mongoose");

const propertiesSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  type: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  area: { type: Number, required: true },
  zimmer: { type: Number, required: true },
  location: { type: String, required: true },
  title: { type: String, required: true },
  number_of_beds: { type: Number, required: true },
  number_of_views: { type: Number, required: true },
  image_url: { type: String, required: true },
});

const Properties = mongoose.model("properties", propertiesSchema);

module.exports = Properties;
