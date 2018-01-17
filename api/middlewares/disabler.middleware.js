const { enableApi } = require('../../config/config')

module.exports = (req, res, next) => {
    if (!enableApi) {
        return res.end('API is disable')
    }
    
    next()
}
