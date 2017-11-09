const Twit = require('twit')
const nlp = require('speakeasy-nlp')

module.exports = (params) => {
    const hashtags = [
        'DailyDadJoke',
        'Funny',
        'DadJoke',
        'Joke',
        'LMAO',
        'Lol',
        'Humour',
        'Laugh',
        'JokeOfTheDay',
        'Haha',
        'Hilarious',
    ]
    const twitter = new Twit({
        ...params,
        timeout_ms: 60 * 1000,
    })

    const _getHashtagsForJoke = (joke) => {
        const numberOfHashtags = 2
        const indexes = []

        while (indexes.length < numberOfHashtags) {
            const random = ~~(Math.random() * hashtags.length)
            if (!indexes.includes(random)) {
                indexes.push(random)
            }
        }

        return indexes.map(i => hashtags[i])
    }

    const tweet = (text) => twitter.post('statuses/update', { status: text })

    const formatTweet = (joke) => `${joke}

${_getHashtagsForJoke(joke).map(h => '#' + h).join(' ')}`

    return {
        tweet,
        formatTweet,
    }
}
