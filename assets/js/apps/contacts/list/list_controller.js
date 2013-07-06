define(["apps/../app", "entities/contact"], function(ContactManager){
  ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
    List.Controller = {
      listContacts: function(){
        var contacts = ContactManager.request("contact:entities");

        console.log("contacts: ", contacts);

  //       var contactsListView = new List.Contacts({
  //         collection: contacts
  //       });
  //
  //       ContactManager.mainRegion.show(contactsListView);
      }
    }
  });

  return ContactManager.ContactsApp.List.Controller;
});