const httpStatus = require('http-status')
const { env } = require('../../config/config')

/**
 * Error handler. Send stacktrace only during development
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    const response = {
        code: err.status,
        message: err.message || httpStatus[err.status],
        errors: err.errors,
        stack: env === 'development' && err.stack,
    }

    res.status(err.status)
    res.json(response)
    res.end()
}

module.exports = {
    errorHandler,
}
