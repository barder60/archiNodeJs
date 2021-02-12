const MongooseTransaction = require('./schemas/Transaction')
const Transaction = require('./../../../domain/Transaction/Transaction')
const TransactionRepository = require('../../../domain/Transaction/TransactionRepository')

module.exports = class extends TransactionRepository {

    constructor() {
        super();
    }

    async persist(TransactionEntity) {
        const { typeTransac, idUser, idTicket } = TransactionEntity;
        const mongooseTransaction = new MongooseTransaction({ typeTransac, idUser, idTicket });
        await mongooseTransaction.save();
        return new Transaction(
            mongooseTransaction.id,
            mongooseTransaction.createAt,
            mongooseTransaction.typeTransac,
            mongooseTransaction.idUser,
            mongooseTransaction.idTicket
        );
    }

    async merge(TransactionEntity) {
        const { typeTransac, idUser, idTicket } = TransactionEntity;
        const mongooseTransaction = MongooseTransaction.findByIdAndUpdate(id, { typeTransac, idUser, idTicket });
        return new Transaction(
            mongooseTransaction.id,
            mongooseTransaction.createAt,
            mongooseTransaction.typeTransac,
            mongooseTransaction.idUser,
            mongooseTransaction.idTicket
        );
    }

    async remove(TransactionId) {
        return MongooseTransaction.findOneAndDelete(TransactionId);
    }

    async get(TransactionId) {
        const mongooseTransaction = await MongooseTransaction.findById(TransactionId);
        return new Transaction(
            mongooseTransaction.id,
            mongooseTransaction.createAt,
            mongooseTransaction.typeTransac,
            mongooseTransaction.idUser,
            mongooseTransaction.idTicket
        );
    }

    async findByUserIdWithAnswer(idUser) {
        const mongooseTransactions = await MongooseTransaction.find({ idUser, typeTransac: { $ne: "pas repondu" } })
        // console.log(mongooseTransactions)
        return mongooseTransactions.map((mongooseTransaction) => {
            return new Transaction(
                mongooseTransaction.id,
                mongooseTransaction.createdAt,
                mongooseTransaction.typeTransac,
                mongooseTransaction.idUser,
                mongooseTransaction.idTicket
            );
        })
    }

    async findByUserIdNotAnswered(idUser) {
        const mongooseTransactions = await MongooseTransaction.find({ idUser, typeTransac: "pas repondu" })
        return mongooseTransactions.map((mongooseTransaction) => {
            return new Transaction(
                mongooseTransaction.id,
                mongooseTransaction.createAt,
                mongooseTransaction.typeTransac,
                mongooseTransaction.idUser,
                mongooseTransaction.idTicket
            );
        })
    }

    async find() {
        const mongooseTransactions = await MongooseTransaction.find();
        return mongooseTransactions.map((mongooseTransaction) => {
            return new Transaction(
                mongooseTransaction.id,
                mongooseTransaction.createAt,
                mongooseTransaction.typeTransac,
                mongooseTransaction.idUser,
                mongooseTransaction.idTicket
            );
        })
    }
}
