// controllers/buyerController.js
const Buyer = require('../models/BuyerModel');
const Product = require('../models/ProductModel');

// Create a new buyer
exports.createBuyer = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const buyer = new Buyer({ fullName, email, password });
    await buyer.save();
    res.status(201).json(buyer);
  } catch (error) {
    res.status(500).json({ error: 'Error creating buyer account' });
  }
};

// Place an order for a product
exports.placeOrder = async (req, res) => {
  try {
    const { buyerId, productId } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    product.orders.push({ buyer: buyerId });
    await product.save();
    res.status(201).json({ message: 'Order placed successfully', product });
  } catch (error) {
    res.status(500).json({ error: 'Error placing order' });
  }
};
