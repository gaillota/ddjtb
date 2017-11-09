const config = require('../config/config')
const JokeService = require('../services/joke.service')
const TwitterService = require('../services/twitter.service')(config.twitter)

module.exports = async () => {
    const {joke} = await JokeService.fetchRandomJoke()
    const tweet = TwitterService.formatTweet(joke)
    console.log('tweet:', tweet)
    // await TwitterService.tweet(tweet)
}
