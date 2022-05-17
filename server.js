const express = require('express')
const path = require('path')
const jquery = require('jquery')
const exphbs = require('express-handlebars')

const app = express()
const PORT = process.env.PORT || 8001

const sequelize = require('./config/connection')
const { ppid } = require('process')

app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(require('./routes'))
app.use(jquery)

app.use(express.static(path.join(__dirname, 'public')))

sequelize.sync({ 
  force: false 
})
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
  })
})