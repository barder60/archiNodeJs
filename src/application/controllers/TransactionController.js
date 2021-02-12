const { get } = require('lodash')
const framework = process.env.APP_DATABASE_CHOICE

const loadRepository = require('../../infrastructure/repositories/loadRepository')

const getTransaction = require('../use_cases/transaction/getTransaction')
const createTransaction = require('../use_cases/transaction/createTransaction')
const findUserTransactionNoAnswer = require('../use_cases/transaction/findUserTransactionNoAnswer')
const findByUserIdWithAnswer = require('../use_cases/transaction/findUserTransactionWithAnswer')

module.exports = {
    async createTransaction(typeTransac, idUser, idTicket) {
        const TransactionRepository = loadRepository.mongodb.TransactionRepository
        return await createTransaction( typeTransac, idUser, idTicket, { TransactionRepository })
    },
    async getTransaction(transactionId) {
        const TransactionRepository = loadRepository.mongodb.TransactionRepository
        return await getTransaction(transactionId, { TransactionRepository })
    },
    async getUserTransactionNoAnswer(userId) {
        const TransactionRepository = loadRepository.mongodb.TransactionRepository
        return await findUserTransactionNoAnswer(userId, { TransactionRepository })
    },
    async getUserTransactionWithAnswer(userId) {
        const TransactionRepository = loadRepository.mongodb.TransactionRepository
        return await findByUserIdWithAnswer(userId, { TransactionRepository })
    }
}
