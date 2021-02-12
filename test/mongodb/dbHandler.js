const mongoose = require('mongoose')
// eslint-disable-next-line node/no-unpublished-require
const { MongoMemoryServer } = require('mongodb-memory-server')

const mongod = new MongoMemoryServer()

const getMongoConnectionString = async () => {
    return await mongod.getUri()
}

const closeDatabase = async () => {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
    await mongod.stop()
}

const connectMongo = async (uri) => {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    mongoose.connection.on('connected', () => log('Connected Local MongoDB'))
    mongoose.connection.on('error', (err) => log('MongoDB error', err))
    mongoose.connection.on('disconnected', () => log('MongoDB disconnected'))

    return mongoose.connection
}

const clearDatabase = async () => {
    const collections = mongoose.connection.collections

    for (const key in collections) {
        const collection = collections[key]
        await collection.deleteMany()
    }
}

module.exports = { getMongoConnectionString, closeDatabase, clearDatabase, connectMongo }
