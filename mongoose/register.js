/* eslint-disable no-console */
const path = require('path')
const fs = require('fs')

module.exports = () => {
    console.log('---- Registering database models ----')
    const modelsDirectory = path.join(__dirname, './models')
    const models = fs.readdirSync(modelsDirectory)
    
    models
        .filter(file => file.match(/([a-zA-Z0-9-_]*)\.model\.js/))
        .map((model) => {
            console.log('Registering model:', model.split('.')[0])
            
            return path.join(modelsDirectory, model)
        })
        .forEach((modelPath) => {
            // eslint-disable-next-line import/no-dynamic-require, global-require
            require(modelPath)
        })
}
