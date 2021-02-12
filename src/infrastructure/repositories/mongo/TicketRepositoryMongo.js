const Ticket = require('./../../../domain/Ticket/Ticket')
const MongooseTicket = require('./schemas/Ticket')
const TicketRepository = require('../../../domain/Ticket/TicketRepository')

module.exports = class extends TicketRepository {

    constructor() {
        super();
    }

    async persist(TicketEntity) {
        const { price } = TicketEntity;
        const mongooseTicket = new MongooseTicket({ price });
        await mongooseTicket.save();
        return new Ticket(mongooseTicket.id, mongooseTicket.price);
    }

    async merge(TicketEntity) {
        const { price } = TicketEntity;
        const mongooseTicket = MongooseTicket.findByIdAndUpdate(id, { price });
        return new Ticket(mongooseTicket.id, mongooseTicket.price);
    }

    async remove(TicketId) {
        return MongooseTicket.findOneAndDelete(TicketId);
    }

    async get(TicketId) {
        const mongooseTicket = await MongooseTicket.findById(TicketId);
        return new Ticket(mongooseTicket.id, mongooseTicket.price);
    }

    async find() {
        const mongooseTickets = await MongooseTicket.find();
        return mongooseTickets.map((mongooseTicket) => {
            return new Ticket(mongooseTicket.id, mongooseTicket.price);
        })
    }
}
