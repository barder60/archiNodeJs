module.exports = (userId, { TransactionRepository }) => {
    return TransactionRepository.findByUserIdNotAnswered(userId)
}
