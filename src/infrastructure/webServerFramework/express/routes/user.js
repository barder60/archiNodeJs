const { get } = require('lodash')
const express = require('express')
const router = express.Router()

const UserController = require('./../../../../application/controllers/UserController')

router.get('/:id', async (req, res, next) => {
    const userId = get(req, 'params.id')

    try {
        const user = await UserController.getUser(userId)
        
        return res.json({ user })
    } catch (err) {
        return next(err)
    }
  })

router.put('/', async (req, res, next) => {
    const { firstName, lastName, email } = req.body

    try {
        const user = await UserController.createUser(firstName, lastName, email)

        return res.json({ user })
    } catch (err) {
        return next(err)
    }
})

module.exports = router
