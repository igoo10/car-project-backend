// controllers/sellerController.js
const Seller = require('../models/SellerModel');
const Product = require('../models/ProductModel');

// Create a new seller
exports.createSeller = async (req, res) => {
  try {
    const { fullName, email, password, dealershipName, businessAddress, contactNumber, website, licenseNumber, logo } = req.body;
    const seller = new Seller({ fullName, email, password, dealershipName, businessAddress, contactNumber, website, licenseNumber, logo });
    await seller.save();
    res.status(201).json(seller);
  } catch (error) {
    res.status(500).json({ error: 'Error creating seller account' });
  }
};

// Post a new product
exports.postProduct = async (req, res) => {
  try {
    const { sellerId, modelName, price, description, image } = req.body;
    const product = new Product({ modelName, price, description, image, seller: sellerId });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error posting product' });
  }
};

// Sell a car (new function to handle car listings from SellCarForm)
exports.sellCar = async (req, res) => {
  try {
    const origin = 'http://localhost:5000'
    const data = req.body; // This receives data sent from the SellCarForm component
    const  images = req.files.map((file) => `${origin}/uploads/${encodeURI(file.filename)}`)
    const carData = {
      ...data,
      images, 
    }
    const newCar = new Product(carData); // Create a new car document with received data
    await newCar.save(); // Save the car document to MongoDB
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ error: 'Error saving car details' });
  }
};
