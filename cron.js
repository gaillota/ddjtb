const { CronJob } = require('cron')

const {tweetRandomJoke} = require('./services')
const cronTime = process.env.CRON_TIME || '06 * * * *'

const job = new CronJob({
    cronTime,
    onTick() {
        console.log('--- Tweeting random joke ---')
        tweetRandomJoke().then(() => {
            console.log('--- Tweet successfully tweeted ---')
        }).catch((e) => {
            console.error(`Error while trying to tweet new joke at ${new Date().toISOString()}`, e)
        })
    },
    start: false,
    timeZone: 'Europe/Paris',
})

module.exports = {
    start() {
        job.start()
        console.log(`${new Date().toString()}: Job is ${job.running ? 'running' : 'stopped'}`)
    }
}
