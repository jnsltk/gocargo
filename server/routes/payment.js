const express = require('express');
const router = express.Router();
const PaymentService = require('../services/paymentService');
const bodyParser = require('body-parser');

// POST to create checkout session for booking
router.post('/api/v1/create-checkout-session', PaymentService.createCheckoutSession);

// Stripe webhook to change booking status after booking has completed
router.post('/api/v1/stripe-webhook', bodyParser.raw({type: 'application/json'}), PaymentService.handleWebhookEvent);

module.exports = router;
