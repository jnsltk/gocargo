const { body, validationResult } = require('express-validator');

const validateManager = [
    body('registration').notEmpty().withMessage("Registration number cannot be empty"),
    body('image').notEmpty().withMessage("Image cannot be empty"),
    body('price').notEmpty().isNumeric().withMessage("Invalid price"),
    body('color').notEmpty().withMessage("Color must be specified"),
    body('brand').notEmpty().withMessage("Brand must be specified"),
    body('description').notEmpty().withMessage("Description cannot be empty"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        next();
    }
]

module.exports = validateManager;