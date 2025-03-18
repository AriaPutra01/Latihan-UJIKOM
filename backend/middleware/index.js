const { loggers } = require('../utils')

const logRequest = (req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - start;
        loggers.info(`${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`, {
            method: req.method,
            url: req.originalUrl,
            status: res.statusCode,
            duration: duration,
            userAgent: req.headers['user-agent'],
            body: req.body,
        });
    });

    next();
};

module.exports = {
    logRequest
};
