define(["apps/../app",
        "tpl!apps/contacts/show/templates/missing.tpl",
        "tpl!apps/contacts/show/templates/view.tpl"],
       function(ContactManager, missingTpl, viewTpl){
  ContactManager.module('ContactsApp.Show', function(Show, ContactManager, Backbone, Marionette, $, _){
    Show.MissingContact = Marionette.ItemView.extend({
      template: missingTpl
    });

    Show.Contact = Marionette.ItemView.extend({
      template: viewTpl
    });
  });

  return;
});