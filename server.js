/* eslint-disable no-console */
const http = require('http')
// make bluebird default Promise
global.Promise = require('bluebird') // eslint-disable-line no-global-assign

const { port, env } = require('./config/config')
const app = require('./app')
const job = require('./jobs')

/**
 * Launch job
 */
console.log('---- Running jobs ----')
job.start()

/**
 * Create http server
 */
console.log('---- Initializing server ----')
http.createServer(app).listen(port, () => {
    console.info(`Server listening on port ${port} (${env})`)
})

/**
 * Error handling
 */
process.on('unhandledRejection', (reason) => {
    // Pass the error to the handler below
    throw reason
})

process.on('uncaughtException', (err) => {
    // eslint-disable-next-line quotes
    console.log(`Shit's on fire, yo !`, err)
})
