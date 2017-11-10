const express = require('express')

const responseHandler = require('./middlewares/response-handler')
const tweetRouter = require('./tweets/router')

const router = express.Router()

router.use('/tweet', tweetRouter)
router.use(responseHandler)

module.exports = router
