const { 
      sign_in, 
      login, 
      logout 
} = require('./api/user_controllers.js')

const { 
      findAllWords, 
      allUserWords, 
      findOneWord, 
      findById, 
      createNewWord, 
      updateWord, 
      deleteWord 
} = require('./api/words_controllers.js')

const {
      renderLoginPage,
      renderHomePage,
      renderCreateWordPage,
      renderAllUserWordsPage,
      renderLikeWordsPage,
      renderDictionary,
      renderPages,
      searchPage
} = require('./client/client_controllers.js')

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
      deleteWord,
      renderLoginPage,
      renderHomePage,
      renderCreateWordPage,
      renderAllUserWordsPage,
      renderLikeWordsPage,
      renderDictionary,
      renderPages,
      searchPage
}