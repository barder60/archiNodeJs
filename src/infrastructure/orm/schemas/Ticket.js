const mongoose = require('../mongoose');

const ticketSchema = new mongoose.Schema({
  price: Number,
  statut:{ 
    type: String,
    default: 'Libre',
    enum: ['libre','Réservé'],
   }
});

module.exports = mongoose.model('Ticket', ticketSchema);