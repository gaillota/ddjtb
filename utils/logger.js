const { Logger, transports } = require('winston')

const { env } = require('../config/config')

const logger = new Logger({
    level: env === 'production' ? 'info' : 'debug',
    transports: [
        new transports.Console({
            handleExceptions: true,
            json: false,
            colorize: true
        }),
    ],
    exitOnError: false,
})

module.exports = logger
