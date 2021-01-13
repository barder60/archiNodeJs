const { isEqual } = require('lodash')

const startExpress = require('./express/startExpress')
const startFastify = require('./fastify/startFastify')

const startServer = async (webServerChoice) => {
    if(isEqual(webServerChoice, 'express')) {
        const server = await startExpress()

        server.webServerChoice = 'Express'
        
        return server
    } else {
        const server = await startFastify()

        server.webServerChoice = 'Fastify'
        
        return server
    }
}

module.exports = startServer