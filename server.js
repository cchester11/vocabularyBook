// import necessary dependencies
const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const session = require('express-session')

const app = express()
const PORT = process.env.PORT || 8001

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
sequelize.sync({ 
  force: false
})
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
  })
})