const fastify = require('fastify')({ logger: true })

const healthcheck = require('./../healthcheck')

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


const initializeRoutes = app => {
    app.use('/', healthcheck)
  }

module.exports = startFastify