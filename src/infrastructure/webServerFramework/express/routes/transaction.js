const { get } = require('lodash')
const express = require('express')
const router = express.Router()

const TransactionController = require('./../../../../application/controllers/TransactionController')

router.get('/transaction', async(req, res, next) => {
    try {
        const transaction = await TransactionController.getTransactionList()

        return res.json({ transaction })
    } catch(err) {
        return next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    const transactionId = get(req, 'params.id')

    try {
        const transaction = await TransactionController.getTransaction(transactionId)

        return res.json({ transaction })
    } catch (err) {
        return next(err)
    }
})

router.get('/user/:id/noAnswer', async (req, res, next) => {
    const userId = get(req, 'params.id')

    try {
        const transaction = await TransactionController.getUserTransactionNoAnswer(userId)

        return res.json({ transaction })
    } catch (err) {
        return next(err)
    }
})

router.get('/user/:id/withAnswer', async (req, res, next) => {
    const userId = get(req, 'params.id')

    try {
        const transaction = await TransactionController.getUserTransactionWithAnswer(userId)

        return res.json({ transaction })
    } catch (err) {
        return next(err)
    }
})

router.put('/', async (req, res, next) => {
    const { typeTransac, idUser, idTicket } = req.body

    try {
        const transaction = await TransactionController.createTransaction(typeTransac, idUser, idTicket)

        return res.json({ transaction })
    } catch (err) {
        return next(err)
    }
})

module.exports = router
