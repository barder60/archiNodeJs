const UserRepositoryMongo = require('./mongo/UserRepositoryMongo')
const TickerRepositoryMongo = require('./mongo/TicketRepositoryMongo')
const TransactionRepositoryMongo = require('./mongo/TransactionRepositoryMongo')

module.exports = {
    mongodb: {
        UserRepository: new UserRepositoryMongo(),
        TicketRepository: new TickerRepositoryMongo(),
        TransactionRepository: new TransactionRepositoryMongo()
    }
}
