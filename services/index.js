const config = require('../config/config')
const JokeService = require('./joke.service')
const TwitterService = require('./twitter.service')

const Twitter = new TwitterService(config.twitter)

const tweetRandomJoke = async () => {
    const {joke} = await JokeService.fetchRandomJoke()
    const tweet = JokeService.formatTweet(joke)
    await Twitter.tweet(tweet)
}

module.exports = {
    tweetRandomJoke
}
