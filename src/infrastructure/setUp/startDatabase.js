const { isEqual } = require('lodash')

const connectMongo = require('../orm/mongoose')

const startDatabase = async (databaseChoice) => {
    if(isEqual(databaseChoice, 'mongodb')) {
        connectMongo()
    } else {
        connectMongo()
    }
} 

module.exports = startDatabase