const mongoose = require('mongoose')

const JokeService = require('../services/joke.service')
const TwitterService = require('../services/twitter.service')

module.exports = async () => {
    const Hashtag = mongoose.model('Hashtag')
    const { joke } = await JokeService.fetchRandomJoke()
    const hashtags = await Hashtag.find({}).exec()
    const tweet = TwitterService.formatTweet(joke, hashtags)
    
    console.log('tweet:', tweet)
    
    await TwitterService.tweet(tweet)
}
