const mongoose = require('./mongoose/setup')
const api = require('./api/setup')

module.exports = async ({ app, mongodb }) => {
    await mongoose({ mongodb })
    await api({ app })
}
