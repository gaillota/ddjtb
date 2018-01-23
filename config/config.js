const path = require('path')

const env = process.env.NODE_ENV || 'development'

require('dotenv-safe').load({
    path: path.join(__dirname, `../.env.${env}`),
    sample: path.join(__dirname, '../.env.example'),
})

module.exports = {
    env,
    logs: env === 'production' ? 'combined' : 'dev',
    port: process.env.PORT || 3000,
    enableApi: process.env.ENABLE_API || false,
    cronInterval: process.env.CRON_INTERVAL || '0 */8 * * *',
    mongodb: {
        host: process.env.MONGO_HOST || 'mongo',
        port: process.env.MONGO_PORT || 27017,
        database: process.env.MONGO_DATABASE || 'dailydadjokes',
    },
    dailydadjokes: {
        baseUrl: 'https://icanhazdadjoke.com',
    },
    twitter: {
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token: process.env.TWITTER_ACCESS_TOKEN,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    },
}
