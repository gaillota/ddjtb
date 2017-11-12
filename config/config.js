const env = process.env.NODE_ENV || 'development'

// eslint-disable-next-line prefer-template
const vars = require('./vars.' + env)

module.exports = {
    env,
    logs: env === 'production' ? 'combined' : 'dev',
    port: process.env.PORT || 3000,
    dailydadjokes: {
        baseUrl: 'https://icanhazdadjoke.com',
    },
    path: 'database.json',
    twitter: {
        consumer_key: process.env.CONSUMER_KEY || vars.twitter_consumer_key,
        consumer_secret: process.env.CONSUMER_SECRET || vars.twitter_consumer_secret,
        access_token: process.env.ACCESS_TOKEN || vars.twitter_access_token,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET || vars.twitter_access_token_secret,
    },
}
