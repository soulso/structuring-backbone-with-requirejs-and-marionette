define(["apps/../app", "tpl!apps/contacts/show/templates/view.tpl"],
       function(ContactManager, viewTpl){
  ContactManager.module('ContactsApp.Show', function(Show, ContactManager, Backbone, Marionette, $, _){
    Show.Contact = Marionette.ItemView.extend({
      template: viewTpl
    });
  });

  return;
});