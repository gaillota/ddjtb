/* eslint-disable no-console */

// make bluebird default Promise
global.Promise = require('bluebird') // eslint-disable-line no-global-assign

const { port, env } = require('./config/config')
const app = require('./app')
const job = require('./cron')

app.listen(port, () => {
    console.info(`Server listening on port ${port} (${env})`)
})

console.log('--- Running jobs ---')
job.start()

process.on('uncaughtException', (err) => {
    console.log('Shit happened:', err)
})
