const express = require('express')
const axios = require('axios')

const config = require('../config/config')

const router = express.Router()

const TwitterService = require('../services/twitter.service')
const Twitter = new TwitterService(config.twitter)

router.use('/', (req, res, next) => {
    axios.get('/').then(response => {
        const { data } = response
        const {
            id,
            joke
        } = data

        console.log('data:', data)

        req.response = {
            data: 'Success'
        }
        next()
        // Twitter.tweet(joke).then(response => {
        //     console.log(response)
        // })
    })
})

module.exports = router
