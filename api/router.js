const express = require('express')

const tweetRandomJoke = require('../workflows/tweet-random-joke')
const responseHandler = require('./middlewares/response-handler')
const logger = require('../utils/logger')

const router = express.Router()

router.post('/', async (req, res, next) => {
    try {
        await tweetRandomJoke()
    } catch (e) {
        logger.err(e)
        next(e)
        return
    }
    req.response = {
        data: 'Success',
    }
    next()
    console.log('Tweeting successful')
})

router.use(responseHandler)

module.exports = router
