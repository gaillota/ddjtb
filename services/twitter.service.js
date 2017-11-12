const Twit = require('twit')

module.exports = (params) => {
    const twitter = new Twit({
        ...params,
        timeout_ms: 60 * 1000,
    })
    const hashtagsList = [
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
    
    const _getHashtagsForJoke = (joke) => {
        // eslint-disable-next-line no-bitwise
        const hashtagsCount = Math.max(~~(Math.random() * hashtagsList.length), 3)
        const indexes = []
        
        while (indexes.length < hashtagsCount) {
            // eslint-disable-next-line no-bitwise
            const random = ~~(Math.random() * hashtagsList.length)
            if (!indexes.includes(random)) {
                indexes.push(random)
            }
        }
        
        return indexes.map(i => hashtagsList[i])
    }
    
    const tweet = text => twitter.post('statuses/update', { status: text })
    
    const formatTweet = joke => `${joke}

${_getHashtagsForJoke(joke).map(h => `#${h}`).join(' ')}`
    
    return {
        tweet,
        formatTweet,
    }
}
