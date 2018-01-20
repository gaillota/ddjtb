const mongoose = require('mongoose')

const HashtagSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
})
HashtagSchema.modelName = 'hashtags'

module.exports = mongoose.model(HashtagSchema.modelName, HashtagSchema)
module.exports.modelName = HashtagSchema.modelName
