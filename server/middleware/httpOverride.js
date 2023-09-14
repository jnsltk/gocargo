const httpOverride = (req, res, next) => {
    const overrideMethod = req.header('X-HTTP-Method-Override') || req.query._method;
    if (overrideMethod) {
        req.method = overrideMethod.toUpperCase();
    }
    next();
}

module.exports = httpOverride;