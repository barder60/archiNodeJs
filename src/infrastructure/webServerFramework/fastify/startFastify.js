const fastify = require('fastify')({ logger: true })

const { initializeRoutes } = require('./index')

const startFastify = async () => {
    try {
        const app = fastify
        initializeRoutes(app)
        return app
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

module.exports = startFastify
