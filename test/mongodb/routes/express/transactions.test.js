const supertest = require("supertest")
const { get } = require('lodash')
const moment = require('moment')

const User = require('../../../../src/infrastructure/repositories/mongo/schemas/User')
const Ticket = require('../../../../src/infrastructure/repositories/mongo/schemas/Ticket')
const Transaction = require('../../../../src/infrastructure/repositories/mongo/schemas/Transaction')

const TransactionDomain = require('../../../../src/domain/Transaction/Transaction')

const startExpress = require('../../../../src/infrastructure/webServerFramework/express/startExpress')
const { getMongoConnectionString, clearDatabase, closeDatabase, connectMongo } = require('../../dbHandler')


jest.setTimeout(60000)

moment.now = () => +new Date('2020-10-27T17:00:00.000Z')

describe('route : /', () => {
    let request

        beforeAll(async done => {
        const mongoUri = await getMongoConnectionString()
        const mongoRunLocal = await connectMongo(mongoUri)
        const app = await startExpress()
        await clearDatabase()

        request = supertest(app)
        done()
    })

    afterEach(async(done) => {
        await clearDatabase()
        await closeDatabase()
    })
    it(`Given One UserId AND have not answer to a Transaction When i /`, async (done) => {

        const user = await User.create({ email: "lucas.pothier@hotmail.fr", firstName: "Lucas", lastName: "Pothier" })

        const ticket = await Ticket.create({ price: "150" })
        const transaction1 = await Transaction.create({ typeTransac: "pas repondu",
            idUser: user.id,
            idTicket: ticket.id,
            createAt: new Date("2020-10-27T17:00:00.000Z") })
        const transaction2 = await Transaction.create({ typeTransac: "pas repondu", idUser: user.id, idTicket: ticket.id,
            createAt: new Date("2020-10-27T17:00:00.000Z") })
        const transaction3 = await Transaction.create({ typeTransac: "pas repondu", idUser: user.id, idTicket: ticket.id,
            createAt: new Date("2020-10-27T17:00:00.000Z") })

        const domainTransaction1 = new TransactionDomain(transaction1.id,
            '2020-10-16T00:00:00.000Z',
            transaction1.typeTransac,
            transaction1.idUser,
            transaction1.idTicket
        )
        const domainTransaction2 = new TransactionDomain(transaction2.id,
            '2020-10-16T00:00:00.000Z',
            transaction2.typeTransac,
            transaction2.idUser,
            transaction2.idTicket
        )
        const domainTransaction3 = new TransactionDomain(transaction3.id,
            '2020-10-16T00:00:00.000Z',
            transaction3.typeTransac,
            transaction3.idUser,
            transaction3.idTicket
        )

        const res = await request.get(`/transaction/user/${user.id}/noAnswer`)



        expect(res.body).toEqual({"transaction":[domainTransaction1,
                domainTransaction2,
                domainTransaction3]})
        done()
    })
})
