const TwitterService = require('../services/twitter.service')

module.exports = async () => {
    const trends = await TwitterService.getTrendings()
    trends.map(async ({ url }) => {
        const tweets = await TwitterService.getTweets({ url })
        
        return tweets
    }).map(({ statuses }) => statuses.map(({ user }) => user.id))
        .forEach((userIds) => {
            userIds.forEach((userId) => {
                TwitterService.follow(userId)
                // Add userId to stack for unfollowing
            })
        })
}
