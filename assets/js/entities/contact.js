define(["apps/../app", "apps/config/storage/localstorage"], function(ContactManager){
  ContactManager.module('Entities', function(Entities, ContactManager, Backbone, Marionette, $, _){
    Entities.Contact = Backbone.Model.extend({
      urlRoot: "contacts"
    });

    Entities.configureStorage(Entities.Contact);

    Entities.ContactCollection = Backbone.Collection.extend({
      url: "contacts",
      model: Entities.Contact,
      comparator: "firstName"
    });

    Entities.configureStorage(Entities.ContactCollection);

    var initializeContacts = function(){
      var contacts = new Entities.ContactCollection([
        { id: 1, firstName: 'Alice', lastName: 'Arten', phoneNumber: '555-0184' },
        { id: 2, firstName: 'Bob', lastName: 'Brigham', phoneNumber: '555-0163' },
        { id: 3, firstName: 'Charlie', lastName: 'Campbell', phoneNumber: '555-0129' }
      ]);
      contacts.forEach(function(contact){
        contact.save();
      });
      return contacts;
    };

    var API = {
      getContactEntities: function(){
        var contacts = new Entities.ContactCollection();
        contacts.fetch();
        if(contacts.length === 0){
          // if we don't have any contacts yet, create some for convenience
          return initializeContacts();
        }
        return contacts;
      },

      getContactEntity: function(contactId){
        var contact = new Entities.Contact({id: contactId});
        contact.fetch();
        return contact;
      }
    };

    ContactManager.reqres.setHandler("contact:entities", function(){
      return API.getContactEntities();
    });
    
    ContactManager.reqres.setHandler("contact:entity", function(id){
      return API.getContactEntity(id);
    });

    // no need for an explicit return value: the contact entities will be fetched
    // by the request-response mechanism, so there's no hard dependecy
    //
    // however, we need to define a module for the contact entities, so dependent modules
    // will wait for it to be loaded before executing code requiring contacts
    return;
  });
});