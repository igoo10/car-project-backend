// models/Car.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  carMake: { type: String, required: true },
  carModel: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  mileage: { type: Number },
  condition: { type: String, required: true },
  fuelType: { type: String, required: true },
  transmission: { type: String, required: true },
  images: [{ type: String }] // Store image URLs or file paths
}, { timestamps: true });

module.exports = mongoose.model('Car', carSchema);
