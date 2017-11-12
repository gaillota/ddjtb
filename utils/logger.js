const { Logger, transports } = require('winston')

const logger = new Logger({
    level: 'info',
    transports: [
        new transports.Console({
            handleExceptions: true,
            json: true,
            colorize: true,
        }),
    ],
    exitOnError: false,
})

module.exports = logger
