const mongooseError = err => ({
    error: 'Mongoose error',
    message: err.message,
})

module.exports = {
    mongooseError,
}
