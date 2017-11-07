const winston = require('winston')

const logger = winston.createLogger({
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
            handleExceptions: true,
            json: false,
            colorize: true
        }),
    ],
    exitOnError: false,
})

module.exports = logger
