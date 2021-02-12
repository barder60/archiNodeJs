const { get } = require('lodash')
const framework = process.env.APP_DATABASE_CHOICE

const loadRepository = require('../../infrastructure/repositories/loadRepository')

const getTicket = require('../use_cases/ticket/getTicket')
const createTicket = require('../use_cases/ticket/createTicket')

module.exports = {
    async createTicket(price) {
        const ticketRepository = loadRepository.mongodb.TicketRepository
        return await createTicket(price, { ticketRepository })
    },
    async getTicket(ticketId) {
        const ticketRepository = loadRepository.mongodb.TicketRepository
        return await getTicket(ticketId, { ticketRepository })
    }
}
