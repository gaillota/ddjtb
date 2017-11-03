const axios = require('axios')

module.exports = (config) => {
    axios.default.baseURL = config.url
}
