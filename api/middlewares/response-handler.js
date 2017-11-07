const httpStatus = require('http-status')

/**
 * Response handler
 * @public
 */
// eslint-disable-next-line no-unused-vars
module.exports = (req, res, next) => {
    const {response} = req
    if (response) {
        const {
            status = httpStatus.OK,
        } = response

        return res.status(status).json(response)
    }

    return next()
}
