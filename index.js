require('dotenv').config()
const express = require('express')

const startDatabase = require('./src/infrastructure/setUp/startDatabase')
const connectMongo = require('./src/infrastructure/orm/mongoose')
 
const start = async () => {
  
  await startDatabase(process.env.DATABASECHOICE)
  
  const app = express()

  app.listen(process.env.APP_PORT, () =>
    console.log(`Lancement de l'application sur le port ${process.env.APP_PORT}`))
}


start();
 
