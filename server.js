// make bluebird default Promise
global.Promise = require('bluebird') // eslint-disable-line no-global-assign

const { port, env } = require('./config/config')
const app = require('./app')
const job = require('./cron')

app.listen(port, () => {
    console.info(`Server listening on port ${port} (${env})`) // eslint-disable-line no-console
})

console.log('--- Running jobs ---')
job.start()

process.on('uncaughtException', function (err) {
    console.log('Shit happened:', err)
})


/**
 * Exports express
 * @public
 */
module.exports = app
