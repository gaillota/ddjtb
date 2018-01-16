const Twit = require('twit')

const { twitter: twitterConfig } = require('../config/config')

class TwitterService {
    constructor(config) {
        this.twitter = new Twit({
            ...config,
            timeout_ms: 60 * 1000,
        })
    }
    
    _getHashtagsForJoke(joke, hashtagList) {
        // eslint-disable-next-line no-bitwise
        const hashtagsCount = Math.max(~~(Math.random() * hashtagList.length), 3)
        const indexes = []
        
        while (indexes.length < hashtagsCount) {
            // eslint-disable-next-line no-bitwise
            const random = ~~(Math.random() * hashtagList.length)
            if (!indexes.includes(random)) {
                indexes.push(random)
            }
        }
        
        return indexes.map(i => hashtagList[i])
    }
    
    tweet(text) {
        return this.twitter.post('statuses/update', { status: text })
    }
    
    getTrendings() {
        return this.twitter.get('trends/place', { id: 1 }) // Using global WOEID for now
    }
    
    getTweets({ url }) {
        return this.twitter.request(url)
    }
    
    formatTweet(joke, hashtags) {
        return `${joke}

${this._getHashtagsForJoke(joke, hashtags)
            .map(h => `#${h}`)
            .join(' ')}`
    }
}

// const twitter = new Twit({
//     ...twitterConfig,
//     timeout_ms: 60 * 1000,
// })
//
// function _getHashtagsForJoke(joke, hashtagList) {
//     // eslint-disable-next-line no-bitwise
//     const hashtagsCount = Math.max(~~(Math.random() * hashtagList.length), 3)
//     const indexes = []
//
//     while (indexes.length < hashtagsCount) {
//         // eslint-disable-next-line no-bitwise
//         const random = ~~(Math.random() * hashtagList.length)
//         if (!indexes.includes(random)) {
//             indexes.push(random)
//         }
//     }
//
//     return indexes.map(i => hashtagList[i])
// }
//
// function tweet(text) {
//     return twitter.post('statuses/update', { status: text })
// }
//
// function getTrendings() {
//     return twitter.get('trends/place', { id: 1 }) // Using global WOEID for now
// }
//
// function formatTweet(joke, hashtags) {
//     return `${joke}
//
// ${_getHashtagsForJoke(joke, hashtags)
//         .map(h => `#${h}`)
//         .join(' ')}`
// }

module.exports = new TwitterService(twitterConfig)
