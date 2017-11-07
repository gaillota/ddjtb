const express = require('express')
const axios = require('axios')

const responseHandler = require('./middlewares/response-handler')
const config = require('../config/config')

const router = express.Router()

const TwitterService = require('../services/twitter.service')
const Twitter = new TwitterService(config.twitter)

router.post('/', (req, res, next) => {
    const url = `${config.dailydadjokes.baseUrl}/`
    axios.get(url, {
        headers: {
            'Accept': 'application/json',
        }
    }).then(response => {
        const { data } = response
        const {
            id,
            joke
        } = data

        console.log('tweet:', id, joke)

        req.response = {
            data: 'Success'
        }
        next()

        const tweet = `${joke}\r#DDJ`
        Twitter.tweet(tweet).then(() => {
            console.log('Tweeting successful')
        })
    })
})

router.use(responseHandler)

module.exports = router
