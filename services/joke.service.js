const axios = require('axios')

const config = require('../config/config')

const fetchRandomJoke = async () => {
    const url = `${config.dailydadjokes.baseUrl}/`
    const response = await axios.get(url, {
        headers: {
            Accept: 'application/json',
        },
    })
    const { data } = response
    
    return data
}

module.exports = {
    fetchRandomJoke,
}
