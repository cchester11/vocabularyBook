const query = 'screen and (max-width: 1000px)';

function onMobile() {
      $('#mobile-navbar-content').show()
      $('#desktop-navbar-content').hide()
}

function onDesktop() {
      $('#desktop-navbar-content').show()
      $('#mobile-navbar-content').hide()
}

enquire.register(query, {
      match: onMobile,
      unmatch: onDesktop
})