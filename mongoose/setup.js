/* eslint-disable no-console */
const connect = require('./connect')
const register = require('./register')

module.exports = async ({ mongodb }) => {
    console.log('---- Initializing Mongoose stuff ----')
    try {
        await connect(mongodb)
        await register()
    } catch (e) {
        console.error('Error while setting up mongoose:', e)
    }
}
