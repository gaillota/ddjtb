const httpStatus = require('http-status')

const { env } = require('../../config/config')

/**
 * Error handler. Send stacktrace only during development
 */
// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
    const {
        status = 500,
        message = httpStatus[status],
        error,
        stack,
    } = err
    const response = {
        code: status,
        message,
        error,
        stack: env === 'development' && stack,
    }
    
    res.status(status)
    res.json(response)
}
