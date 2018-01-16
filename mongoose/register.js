/* eslint-disable no-console */
const path = require('path')

const { readDir } = require('../utils/filesystem')

module.exports = async () => {
    console.log('---- Registering database models ----')
    const modelsDirectory = path.join(__dirname, './models')
    const models = await readDir(modelsDirectory)
    
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
