const router = require('./router')
const notFound = require('./middlewares/not-found')
const {
    errorHandler,
} = require('./middlewares/error')

module.exports = ({ app }) => {
    app.use('/tweet', router)

    // catch 404 and forward to error handler
    app.use(notFound)

    // error handler, send stacktrace only during development
    app.use(errorHandler)
}
