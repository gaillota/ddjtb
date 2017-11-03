// make bluebird default Promise
global.Promise = require('bluebird') // eslint-disable-line no-global-assign

const { port, env } = require('./config/config')
const app = require('./app')

app.listen(port, () => {
    console.info(`Server listening on port ${port} (${env})`) // eslint-disable-line no-console
})

process.on('uncaughtException', function (err) {
    console.log(err);
});

/**
 * Exports express
 * @public
 */
module.exports = app
