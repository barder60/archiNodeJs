const express = require('express')

 
const initializeRoutes = app => {
  app.use('/', res.send('Hello World'))
}

const start = async () => {
  await connectMongo(process.env.MONGODB_ADDON_URI)
  
  const app = express()

  initializeRoutes(app)

  app.listen(process.env.PORT, () =>
    log(`Lancement de l'application sur le port ${process.env.PORT}`))
}

start();
 
