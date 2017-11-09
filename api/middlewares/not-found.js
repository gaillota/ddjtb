const httpStatus = require('http-status')

/**
 * Catch 404 and forward to error handler
 * @public
 */
module.exports = (req, res, next) => {
    const err = {
        status: httpStatus.NOT_FOUND
    }

    next(err)
}
