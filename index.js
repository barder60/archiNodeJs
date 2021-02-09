require('dotenv').config()
const express = require('express')

const connectMongo = require('./src/infrastructure/repositories/mongo/mongoose')
const startDatabase = require('./src/infrastructure/setUp/startDatabase')
const startServer = require('./src/infrastructure/webServerFramework/startApp')

const start = async () => {

  await startDatabase(process.env.APP_DATABASE_CHOICE)

  const server = await startServer(process.env.APP_WEBSERVER_CHOICE)


  await server.listen(process.env.APP_PORT, () => {
    console.log(`${server.webServerChoice} listening to :${process.env.APP_PORT}`)})
}


start();

