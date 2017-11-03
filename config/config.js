module.exports = {
    env: process.env.NODE_ENV,
    logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
    port: process.env.PORT || 3000,
    dailydadjokes: {
        url: 'https://icanhazdadjoke.com',
    },
    path: 'database.json',
    twitter: {
        consumer_key: '7iVFcMBTCF1k4Sq69J33YamYf',
        consumer_secret: 'KCDAgZs36xfC9uF1a5VnDkJ1td0SLrlWHGdWFjbRGhN1MCWa7d',
        access_token: '925855345804824576-TmL3vaB9vPVT3KeVoSP9nLnIeIZGnqE',
        access_token_secret: '38vX2y5x5ltFN04TAhdEB43SF1TMTKpbJJnofpwAFhu7m',
    }
}
