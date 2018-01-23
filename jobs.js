/* eslint-disable no-console */
const { CronJob } = require('cron')

const { cronInterval: cronTime } = require('./config/config')
const tweetRandomJoke = require('./workflows/tweet-random-joke')

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
    },
}
