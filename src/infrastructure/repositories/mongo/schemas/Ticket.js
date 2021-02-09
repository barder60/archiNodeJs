const mongoose = require('../mongoose');

const ticketSchema = new mongoose.Schema({
  price: Number
});

module.exports = mongoose.model('Ticket', ticketSchema);
