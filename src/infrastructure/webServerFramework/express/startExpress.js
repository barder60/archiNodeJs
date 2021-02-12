const express = require('express')
const bodyParser = require('body-parser')
const { initializeRoutes } = require('./index')

const startExpress = async () => {
    try {
        const app = express()

        app.use(bodyParser.json({
            limit: '10mb'
        }))
        app.use(bodyParser.urlencoded({
            extended: true
        }))

        initializeRoutes(app)

        return app
    } catch (err) {
        console.log(err)
    }
}

module.exports = startExpress
