const express = require('express')
const path = require('path')
const expressHandleBars = require('express-handlebars')

const app = express()
const PORT = process.env.PORT || 8001

const sequelize = require('./connection/config')

app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', expressHandleBars({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(require('./routes'))

app.use(express.static(path.join(__dirname, 
  'public')))

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
  })
})