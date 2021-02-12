const Ticket = require('../../../domain/Ticket/Ticket')

module.exports = (price, { ticketRepository }) => {
    const ticket = new Ticket(null, price)
    return ticketRepository.persist(ticket)
}
