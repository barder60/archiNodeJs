const { isEqual } = require('lodash')

const startExpress = require('./express/startExpress')
const startFastify = require('./fastify/startFastify')

const startServer = async (webServerChoice) => {
    if(isEqual(webServerChoice, 'express')) {
        return startExpress()
    } else {
        return startFastify()
    }
}

module.exports = {
    startServer
}
