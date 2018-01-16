const express = require('express')

const hashtagsRouter = require('./hashtags/router')
const tweetsRouter = require('./tweets/router')
const responseHandler = require('./middlewares/response-handler')

const router = express.Router()

router.use('/tweets', tweetsRouter)
router.use('/hashtags', hashtagsRouter)
router.use(responseHandler)

module.exports = router
