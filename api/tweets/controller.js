const tweetRandomJoke = require('../../workflows/tweet-random-joke')

const tweet = async (req, res, next) => {
    const { joke } = req.body
    
    try {
        await tweetRandomJoke(joke)
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
