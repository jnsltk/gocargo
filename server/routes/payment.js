const express = require('express');
const router = express.Router();
const PaymentService = require('../services/paymentService');

// POST to create checkout session for booking
router.post('/api/v1/create-checkout-session', PaymentService.createCheckoutSession);

module.exports = router;
