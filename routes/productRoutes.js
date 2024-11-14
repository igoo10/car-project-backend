// routes/carRoutes.js
const express = require('express');
const router = express.Router();
const Car = require('../models/ProductModel');

router.post('/sell', async (req, res) => {
  try {
    const newCar = new Car(req.body);
    await newCar.save();
    res.status(201).json({ message: 'Car listed successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error listing car', error });
  }
});

module.exports = router;
