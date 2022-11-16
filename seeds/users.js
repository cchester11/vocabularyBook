// access the Users table
const { Users } = require('../models')

const users = [
      {
            username: 'professorDumbledore',
            password: 'Asd40'
      },
      {
            username: 'HarryPotter',
            password: 'Req45'
      }
]

const seedUsers = () => Users.bulkCreate(users, { individualHooks: true })

module.exports = seedUsers;