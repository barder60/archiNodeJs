const { get } = require('lodash')
const express = require('express')
const router = express.Router()

const TicketController = require('./../../../../application/controllers/TicketController')

router.get('/:id', async (req, res, next) => {
    const ticketId = get(req, 'params.id')

    try {
        const ticket = await TicketController.getTicket(ticketId)

        return res.json({ ticket })
    } catch (err) {
        return next(err)
    }
})

router.put('/', async (req, res, next) => {
    const { price } = req.body

    try {
        const ticket = await TicketController.createTicket(price)

        return res.json({ ticket })
    } catch (err) {
        return next(err)
    }
})

module.exports = router
