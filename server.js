const axios = require('axios')

const config = require('./config')

require('./init')(config)
const TwitterService = require('./twitter.service')(config.twitter)

axios.get('/').then(response => {
    const { data } = response
    const {
        id,
        joke
    } = data

    TwitterService.tweet(joke)
    // Persist id to prevent multiple same tweet
})
