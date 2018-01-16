/* eslint-disable global-require,no-console */
const notFound = require('./middlewares/not-found')
const errorHandler = require('./middlewares/error-handler')

module.exports = ({ app }) => {
    console.log('---- Initializing API ---')
    
    // Inline require to prevent mongoose access before connection
    app.use('/api', require('./router'))

    // catch 404 and forward to error handler
    app.use(notFound)

    // error handler, send stacktrace only during development
    app.use(errorHandler)
}
