const mongoose = require('mongoose')

const errorHandler = require('../utils/errors')

const Hashtag = mongoose.model('Hashtag')

const create = async (req, res, next) => {
    const { text } = req.body
    const hashtag = new Hashtag({ text })
    let result
    
    try {
        result = await hashtag.save()
    } catch (e) {
        return next(errorHandler.mongooseError(e))
    }
    
    req.response = {
        result,
    }
    next()
}

const toggle = async (req, res, next) => {
    const { hashtag } = req.params
    const { disabled } = req.body
    
    hashtag.disabled = disabled || !hashtag.disabled
    hashtag.save((err, doc, result) => {
        if (err) {
            return next(errorHandler.mongooseError(err))
        }
        
        req.response = {
            result,
            hashtag: doc,
        }
        next()
    })
}

const get = async (req, res, next) => {
    const { hashtag } = req.params
    
    req.response = {
        result: hashtag,
    }
    next()
}

const getAll = async (req, res, next) => {
    Hashtag.find({}, (err, hashtags) => {
        if (err) {
            return next(err)
        }
        
        req.response = {
            result: hashtags,
        }
        next()
    })
}

module.exports = {
    create,
    toggle,
    get,
    getAll,
}
