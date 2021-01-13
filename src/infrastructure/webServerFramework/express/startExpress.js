const express = require('express')

const healthcheck = require('./../healthcheck')

const startExpress = async () => {
    try {
        const app = express()
        initializeRoutes(app)
        return app
    } catch (err) {
        console.log(err)
    }
}

const initializeRoutes = app => {
  app.use('/', healthcheck)
}

module.exports = startExpress