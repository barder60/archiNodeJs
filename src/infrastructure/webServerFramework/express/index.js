const users = require('./routes/user')
const ticket = require('./routes/ticket')
const transaction = require('./routes/transaction')

const initializeRoutes = app => {
    app.use('/user', users)
    app.use('/ticket', ticket)
    app.use('/transaction', transaction)
  }


module.exports = {
  initializeRoutes
}
