const fastify = require('fastify')({
    logger: true
})

fastify.get('/', async (request, reply) => {
    return { 'test': 'test' }
})

module.exports = fastify
