const { get } = require('lodash')
const framework = process.env.APP_DATABASE_CHOICE

const loadRepository = require('../../infrastructure/repositories/loadRepository')

const getUser = require('../use_cases/user/getUser')
const createUser = require('../use_cases/user/createUser')

module.exports = {
    async createUser(firstName, lastName, email) {
        const userRepository = loadRepository.mongodb.UserRepository
        return await createUser(firstName, lastName, email, { userRepository })
    },
    async getUser(userId) {
        const userRepository = loadRepository.mongodb.UserRepository
        return await getUser(userId, { userRepository })
    }
}
