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

const Hashtag = mongoose.model('Hashtag', HashtagSchema)

module.exports = Hashtag
