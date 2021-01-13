// Modules
const express = require('express')

const router = express.Router()

/**
 * @api {get} / Home : Route d'health check
 * @apiVersion 0.1.0
 * @apiName GetHome
 * @apiGroup Home
 *
 * @apiSuccess {String}  wel    'come'
 */
router.get('/', (req, res, next) => {
    res.json({ wel: 'come' })
  })


module.exports = router