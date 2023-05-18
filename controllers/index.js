const { sign_in, login, logout } = require('./user_controllers')
const { findAllWords, allUserWords } = require('./words_controllers')

module.exports = { 
      sign_in, 
      login, 
      logout, 
      findAllWords,
      allUserWords 
}