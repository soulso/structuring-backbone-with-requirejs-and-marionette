define(["apps/../app",
        "apps/contacts/list/list_controller",
        "apps/contacts/show/show_controller"],
       function(ContactManager){
  ContactManager.module('ContactsApp', function(ContactsApp, ContactManager, Backbone, Marionette, $, _){
    ContactsApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        "contacts": "listContacts",
        "contacts/:id": "showContact"
      }
    });

    var API = {
      listContacts: function(){
        ContactsApp.List.Controller.listContacts();
      },

      showContact: function(id){
        ContactsApp.Show.Controller.showContact(id);
      }
    };

    ContactManager.on("contacts:list", function(){
      ContactManager.navigate("contacts");
      API.listContacts();
    });

    ContactManager.on("contact:show", function(id){
      ContactManager.navigate("contacts/" + id);
      API.showContact(id);
    });

    ContactManager.addInitializer(function(){
      new ContactsApp.Router({
        controller: API
      });
    });
  });

  return ContactManager.ContactsApp;
});