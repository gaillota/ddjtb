/* eslint-disable no-console */
const connect = require('./connect')
const register = require('./register')

module.exports = ({ mongodb }) => {
    console.log('---- Initializing Mongoose stuff ----')
    try {
        connect(mongodb)
        register()
    } catch (e) {
        console.error('Error while setting up mongoose:', e)
    }
}
