module.exports = (ticketId, { ticketRepository }) => {
    return ticketRepository.get(ticketId)
}
