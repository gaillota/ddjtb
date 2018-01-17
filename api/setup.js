const router = require('./router')
const notFound = require('./middlewares/not-found')
const errorHandler = require('./middlewares/error-handler')
const disabler = require('./middlewares/disabler.middleware')

module.exports = ({ app }) => {
    app.use(disabler)
    
    app.use('/', router)

    // catch 404 and forward to error handler
    app.use(notFound)

    // error handler, send stacktrace only during development
    app.use(errorHandler)
}
