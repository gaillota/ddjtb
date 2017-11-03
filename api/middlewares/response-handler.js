const httpStatus = require('http-status')

/**
 * Response handler
 * @public
 */
// eslint-disable-next-line no-unused-vars
module.exports = (req, res, next) => {
    if (req.response) {
        const {
            response: {
                status = httpStatus.OK,
            },
        } = req

        return res.status(status).json(req.response)
    }

    return next()
}
