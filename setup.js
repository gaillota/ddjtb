/* eslint-disable global-require */
module.exports = async ({ app, mongodb }) => {
    await require('./mongoose/setup')({ mongodb })
    await require('./api/setup')({ app })
}
