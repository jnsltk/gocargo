const CarModel = require('../models/Car');

// create checkout session for stripe
exports.createCheckoutSession = async (req, res, next) => {
    // Create product here

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
                name: `${car.brand} car, for ${rentalDays} days.`,
                images: [`${process.env.API_HOST}api/v1/cars/${car.registration}/image.png`]
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
