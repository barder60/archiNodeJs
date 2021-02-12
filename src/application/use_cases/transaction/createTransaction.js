const Transaction = require('../../../domain/Transaction/Transaction')

module.exports = (typeTransac, idUser, idTicket, { TransactionRepository }) => {
    const transaction = new Transaction(null, null, typeTransac, idUser, idTicket)
    return TransactionRepository.persist(transaction)
}
