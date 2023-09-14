const { body, validationResult } = require('express-validator');

const validateBooking = [
    body('userEmail').notEmpty().isEmail().withMessage("Invalid email address"),
    body('startDate').notEmpty().withMessage("Invalid starting date format"),
    body('endDate').notEmpty().withMessage("Invalid return date format"),
    body('status').notEmpty().withMessage("Status cannot be empty"),
    body('content').notEmpty().withMessage("Content cannot be empty"),
    body('registration').notEmpty().withMessage("Car registration cannot be empty"),
    body().escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        console.log(errors)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        next();
    }
]

module.exports = validateBooking;