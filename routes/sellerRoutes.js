// routers/sellerRoutes.js
const express = require('express');
const { createSeller, postProduct, sellCar } = require('../controller/sellerController'); // Import sellCar function

const router = express.Router();

// Route to create a seller
router.post('/create', createSeller);

// Route to post a product
router.post('/product', postProduct);

// Route for selling a car
router.post('/sell', sellCar);

module.exports = router;
