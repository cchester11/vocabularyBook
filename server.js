// import necessary dependencies
const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const session = require('express-session')

//connection declarations
const app = express()
const PORT = process.env.PORT
const IP = process.env.IP
const NODE_ENV = process.env.NODE_ENV

// establish connection to the db
const sequelize = require('./config/connection')
// used to build the session structure
const SequelizeStore = require('connect-session-sequelize')(session.Store)

// set up handlebars
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

// set up session object that will be passed to our express middleware
const sess = {
  secret: 'secret to be kept',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(session(sess))
app.use(require('./routes'))

// fire up the server
// if force: true the tables are erased and reset
// if force: false all data will be preserved at each fire up
sequelize.sync({ 
  force: false
})
.then(() => {
  if(process.env.NODE_ENV === 'local') {
    app.listen(3001, () => {
      console.log('Server running locally on PORT 3001')
    })
  } else {
    app.listen(PORT, IP, () => {
      console.log(`Server running on railway web service @ ${PORT}`)
    })
  }
})
.catch(err => {
  throw new Error(err)
})