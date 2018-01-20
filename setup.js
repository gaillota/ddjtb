/* eslint-disable global-require */
module.exports = ({ app, mongodb }) => {
    require('./mongoose/setup')({ mongodb })
    require('./api/setup')({ app })
}
