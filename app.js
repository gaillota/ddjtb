const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compress = require('compression')
const methodOverride = require('method-override')
const cors = require('cors')
const helmet = require('helmet')

const { logs } = require('./config/config')
const logger = require('./utils/logger')
const init = require('./api/init')

/**
 * Express instance
 * @public
 */
const app = express()

// request logging. dev: console | production: file
app.use(morgan(logs, { stream: logger.stream }))

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// gzip compression
app.use(compress())

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride())

// secure apps by setting various HTTP headers
app.use(helmet())

// enable CORS - Cross Origin Resource Sharing
app.use(cors())

init({ app })

module.exports = app
