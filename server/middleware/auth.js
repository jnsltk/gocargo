const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Authorization token missing" });
    }

    // verify token

    jwt.verify(token, 'your-secret-key', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }

        // attach decode user data to the request object
        req.user = decoded;

        next();
    });
}

