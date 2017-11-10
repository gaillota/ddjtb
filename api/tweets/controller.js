const tweetRandomJoke = require('../../workflows/tweet-random-joke')
const logger = require('../../utils/logger')

const tweet = async (req, res, next) => {
    try {
        await tweetRandomJoke()
    } catch (e) {
        logger.err(e)
        next(e)
        return
    }
    req.response = {
        data: 'Success',
    }
    next()
    console.log('Tweeting successful')
}

module.exports = {
    tweet
}
