define(["apps/../app", "entities/contact", "apps/contacts/list/list_view"], function(ContactManager){
  ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
    List.Controller = {
      listContacts: function(){
        var contacts = ContactManager.request("contact:entities");

        var contactsListView = new List.Contacts({
          collection: contacts
        });
        
        contactsListView.on("itemview:contact:delete", function(childView, model){
          contacts.remove(model);
        });

        ContactManager.mainRegion.show(contactsListView);
      }
    }
  });

  return ContactManager.ContactsApp.List.Controller;
});