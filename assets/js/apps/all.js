// this is simply a named modle to include all sub applications
// it is used to ensure all sub-applciations are loaded before
// calling Backbone.history.start() so that their routing controllers
// can process the URL fragment already present in the URL (if any)
define(["apps/contacts/contacts_app",
        "apps/about/about_app",
        "apps/header/header_app"], function () {
  return;
});