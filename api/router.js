const express = require('express')

const {tweetRandomJoke} = require('../services')
const responseHandler = require('./middlewares/response-handler')

const router = express.Router()

router.post('/', async (req, res, next) => {
    await tweetRandomJoke()
    req.response = {
        data: 'Success',
    }
    next()
    console.log('Tweeting successful')
})

router.use(responseHandler)

module.exports = router
