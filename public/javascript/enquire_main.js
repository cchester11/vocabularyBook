enquire.register("screen and (max-width: 768px)", {
      match: () => {
            $("#desktop-navbar-content").hide()
      },
      unmatch: () => {
            $("$mobile-navbar-content").hide()
      }
});