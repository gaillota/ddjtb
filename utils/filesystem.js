const fs = require('fs')

const readDir = path => new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
        if (err) {
            return reject(err)
        }
        
        resolve(files)
    })
})

const readFile = path => new Promise((resolve, reject) => {
    fs.readFile(path, (err, file) => {
        if (err) {
            return reject(err)
        }
        
        resolve(file)
    })
})

module.exports = {
    readDir,
    readFile,
}
