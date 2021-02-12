module.exports = (transactionId, { TransactionRepository }) => {
    return TransactionRepository.get(transactionId)
}
