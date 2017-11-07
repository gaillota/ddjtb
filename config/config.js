module.exports = {
    env: process.env.NODE_ENV || 'development',
    logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
    port: process.env.PORT || 3000,
    dailydadjokes: {
        baseUrl: 'https://icanhazdadjoke.com',
    },
    path: 'database.json',
    twitter: {
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token: process.env.ACCESS_TOKEN,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    }
}
