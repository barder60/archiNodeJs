module.exports = class {
    persist(domainTransaction) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    merge(domainTransaction) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    remove(transactionId) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async findByUserIdNotAnswered(idUser) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async findByUserIdWithAnswer(idUser) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    find() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
  }
