// models/Seller.js
const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dealershipName: { type: String, required: true },
  businessAddress: { type: String, required: true },
  contactNumber: { type: String, required: true },
  website: { type: String },
  licenseNumber: { type: String, required: true },
  logo: { type: String }, // could be a URL or file path to the logo image
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
}, { timestamps: true });

const Seller = mongoose.model('Seller', sellerSchema);
module.exports = Seller;
