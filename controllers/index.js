const { 
      sign_in, 
      login, 
      logout 
} = require('./user_controllers')

const { 
      findAllWords, 
      allUserWords, 
      findOneWord, 
      findById, 
      createNewWord, 
      updateWord, 
      deleteWord 
} = require('./words_controllers')

const {
      getUserLikes,
      addLikeWordToUser
} = require('./likes_controllers')

module.exports = { 
      sign_in, 
      login, 
      logout, 
      findAllWords,
      allUserWords,
      findOneWord,
      findById,
      createNewWord,
      updateWord,
      deleteWord 
}