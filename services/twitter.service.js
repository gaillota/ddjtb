const Twit = require('twit')

class TwitterService {
    constructor(params) {
        const {
            consumer_key,
            consumer_secret,
            access_token,
            access_token_secret,
        } = params

        this.twitter = new Twit({
            consumer_key,
            consumer_secret,
            access_token,
            access_token_secret,
            timeout_ms: 60 * 1000,
        })
    }

    tweet(text) {
        return this.twitter.post('statuses/update', { status: text })
    }
}

module.exports = TwitterService
