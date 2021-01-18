const User = require('../../domain/User')
const MongooseUser = require('../orm/mongoose/schemas/User')
const UserRepository = require('../../domain/UserRepository')

module.exports = class extends UserRepository {

    constructor() {
      super();
    }
  
    async persist(userEntity) {
      const { firstName, lastName, email } = userEntity;
      const mongooseUser = new MongooseUser({ firstName, lastName, email, password });
      await mongooseUser.save();
      return new User(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email);
    }
  
    async merge(userEntity) {
      const { id, firstName, lastName, email } = userEntity;
      const mongooseUser = MongooseUser.findByIdAndUpdate(id, { firstName, lastName, email, password });
      return new User(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email);
    }
  
    async remove(userId) {
      return MongooseUser.findOneAndDelete(userId);
    }
  
    async get(userId) {
      const mongooseUser = await MongooseUser.findById(userId);
      return new User(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email);
    }
  
    async getByEmail(userEmail) {
      const mongooseUser = await MongooseUser.find({ email: userEmail });
      return new User(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email);
    }
  
    async find() {
      const mongooseUsers = await MongooseUser.find();
      return mongooseUsers.map((mongooseUser) => {
        return new User(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email);
      })
    }
  }