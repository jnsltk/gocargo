const CarModel = require('../models/Car');
const BookingModel = require('../models/Booking');
const stripe = require('stripe')(process.env.STRIPE_KEY);

// create checkout session for stripe
exports.createCheckoutSession = async (req, res, next) => {
    // Create product here

    const bookingRef = req.body.bookingRef;
    // Use car data from database (esp important for price)
    const car = await CarModel.findById(req.body.car._id);
    // Set the price in öre (required format by Stripe)
    const finalPriceInOre = car.price * 100;

    // calculate number of rental days
    const rentalDays = (() => {
        const startDate = new Date(req.body.bookingInfo.startDate);
        const endDate = new Date(req.body.bookingInfo.endDate);

        const diffInTime = endDate.getTime() - startDate.getTime();
        return diffInTime / (1000 * 3600 * 24);
    })();

    const product = [{
        price_data: {
            currency: "sek",
            product_data: {
                name: `Order id: ${bookingRef}, ${car.brand} car, for ${rentalDays} days.`,
                metadata: {
                    bookingRef: bookingRef
                }
            },
            unit_amount: finalPriceInOre,
        },
        quantity: rentalDays
    }];

    const stripe = require('stripe')(process.env.STRIPE_KEY);

    const session = await stripe.checkout.sessions.create({
        line_items: product,
        mode: 'payment',
        success_url: `${process.env.CLIENT_HOST}/booking/confirmation`,
        cancel_url: `${process.env.CLIENT_HOST}/booking/confirm-data`
    });

    // return url to get around cors
    res.json({url: session.url})
}

const fulfillOrder = async (lineItems) => {
    // This is where bookings should be handled
    const orderRef = lineItems.data[0].description.split(" ")[2].slice(0, -1);
    
    try {
        const booking = await BookingModel.findOne({ bookingReference: orderRef });
        if (!booking) {
            return res.status(404).json( {message: 'Booking not found' });
        }
        
        const updatedBooking = { "status": "paid", "content": "Booking confirmed and paid" };
        
        Object.assign(booking, updatedBooking);

        booking.save();
    } catch (error) {
        console.error(error);
    }
}

exports.handleWebhookEvent = async (req, res) => {
    const payload = req.body;
    const sig = req.headers['stripe-signature'];

    const endpointSecret = process.env.STRIPE_WH_SECRET;

    let event;

    try {
        event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
        console.log('failed webhook verification', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        // Retrieve the session. If you require line items in the response, you may include them by expanding line_items.
            const sessionWithLineItems = await stripe.checkout.sessions.retrieve
        (
            event.data.object.id,
            {
                expand
                : ['line_items'],
            }
        );
        const lineItems = sessionWithLineItems.line_items;

        // Fulfill the purchase...
            fulfillOrder(lineItems);
    }


    res.status(200).end();
}
