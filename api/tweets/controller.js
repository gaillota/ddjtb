const tweetRandomJoke = require('../../workflows/tweet-random-joke')

const tweet = async (req, res, next) => {
    try {
        await tweetRandomJoke()
    } catch (e) {
        return next(e)
    }
    req.response = {
        data: 'Success',
    }
    next()
    // eslint-disable-next-line no-console
    console.log('Tweeting successful')
}

module.exports = {
    tweet,
}
