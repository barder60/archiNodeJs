module.exports = (userId, { TransactionRepository }) => {
    return TransactionRepository.findByUserIdWithAnswer(userId)
}
