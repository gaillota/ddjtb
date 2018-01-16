/* eslint-disable no-console */
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const defaultOptions = {
    useMongoClient: true,
}

module.exports = ({
 username = '', password = '', host = '127.0.0.1', port = 27017, database, options: opts = {},
}) => new Promise((resolve, reject) => {
    const options = {
        ...defaultOptions,
        ...opts,
    }
    const credentials = `${username && password && `${username}:${password}@`}`
    const uri = `mongodb://${credentials}${host}:${port}/${database}`
    
    mongoose.connect(uri, options)
    
    mongoose.connection.on('connected', () => {
        console.log(`Mongoose connection open to ${uri}`)
        resolve()
    })
    
    mongoose.connection.on('error', (err) => {
        console.log('Mongoose connection error', err)
        reject(err)
    })
    
    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose connection disconnected')
    })
})
