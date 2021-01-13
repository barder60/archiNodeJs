'use strict';
const mongoose = require('mongoose') 

const connectMongo = async () => {
    await mongoose.connect(process.env.MONGODB_ADDON_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    mongoose.connection.on('connected', () => log('Connected to MongoDB'))
    mongoose.connection.on('error', (err) => log('MongoDB error', err))
    mongoose.connection.on('disconnected', () => log('MongoDB disconnected'))
  
    return mongoose.connection
  }

module.exports = connectMongo