// routers/buyerRoutes.js
const express = require('express');
const { createBuyer, placeOrder } = require('../controller/buyerController');

const router = express.Router();

// Route to create a buyer
router.post('/create', createBuyer);

// Route to place an order
router.post('/order', placeOrder);

module.exports = router;
