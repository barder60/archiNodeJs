const { isEqual } = require('lodash')

const connectMongo = require('../repositories/mongo/mongoose')

const startDatabase = async (databaseChoice) => {
    if(isEqual(databaseChoice, 'mongodb')) {
        connectMongo()
    } else {
        connectMongo()
    }
}

module.exports = startDatabase
