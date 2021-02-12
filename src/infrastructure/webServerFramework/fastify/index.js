const users = require('./routes/user')

const initializeRoutes = app => {
    app.use('/user', users)
  }


module.exports = {
  initializeRoutes
}
