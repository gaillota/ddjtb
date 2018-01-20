// const mongoose = require('mongoose')

const JokeService = require('../services/joke.service')
const TwitterService = require('../services/twitter.service')
// const HashtagSchema = require('../mongoose/models/hashtag.model')

// const Hashtag = mongoose.model(HashtagSchema.modelName)

module.exports = async () => {
    const { joke } = await JokeService.fetchRandomJoke()
    // const hashtags = await Hashtag.find({}).exec()
    const tweet = TwitterService.formatTweet(joke)
    
    await TwitterService.tweet(tweet)
}
