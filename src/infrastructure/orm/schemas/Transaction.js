const mongoose = require('../mongoose');

const Schema = mongoose.Schema;

const  transactionSchema = new mongoose.Schema({
  createdAt: {
      type:Date,
      default:Date.now(),
    },
  typeTransac:{ 
      type: String,
      enum: ['Réservation', 'Remboursement']
    },
  idUser: {
       type: Schema.Types.ObjectId,
        ref: 'User'
    },
  idTicket: {
        type: Schema.Types.ObjectId,
         ref: 'Ticket'
    },
});

module.exports = mongoose.model('Transaction', transactionSchema);