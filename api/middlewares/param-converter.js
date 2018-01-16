const mongoose = require('mongoose')

module.exports = (modelName, field = '_id') => {
    const Model = mongoose.model(modelName)
    // TODO: Check if model exists
    
    return (req, res, next, value) => {
        // Using findOne to be able to call functions like save() later
        Model.findOne({ [field]: value }, (err, doc) => {
            if (err) {
                return next(err)
            }
            if (!doc) {
                return next(new Error(`${modelName} with ${field} ${value} not found`))
            }
            
            req.params[modelName.toLowerCase()] = doc
            next()
        })
    }
}
