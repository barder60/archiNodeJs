'use strict';

const mongoose = require('mongoose');
//const environment = require('dotenv').config(); 

const connectMongo = async (uri) => {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    mongoose.connection.on('connected', () => log('Connected to MongoDB'))
    mongoose.connection.on('error', (err) => log('MongoDB error', err))
    mongoose.connection.on('disconnected', () => log('MongoDB disconnected'))
  
    return mongoose.connection
  }

module.exports = connectMongo;