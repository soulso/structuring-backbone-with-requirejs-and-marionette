define(["apps/../app"], function(ContactManager){
  ContactManager.module('Entities', function(Entities, ContactManager, Backbone, Marionette, $, _){
    Entities.Contact = Backbone.Model.extend({});

    Entities.ContactCollection = Backbone.Collection.extend({
      model: Entities.Contact,
      comparator: "firstName"
    });

    var contacts;

    var initializeContacts = function(){
      contacts = new Entities.ContactCollection([
        { id: 1, firstName: 'Alice', lastName: 'Arten', phoneNumber: '555-0184' },
        { id: 2, firstName: 'Bob', lastName: 'Brigham', phoneNumber: '555-0163' },
        { id: 3, firstName: 'Charlie', lastName: 'Campbell', phoneNumber: '555-0129' }
      ]);
    };

    var API = {
      getContactEntities: function(){
        if(contacts === undefined){
          initializeContacts();
        }
        return contacts;
      }
    };

    ContactManager.reqres.setHandler("contact:entities", function(){
      return API.getContactEntities();
    });

    // no need for an explicit return value: the contact entities will be fetched
    // by the request-response mechanism, so there's no hard dependecy
    //
    // however, we need to define a module for the contact entities, so dependent modules
    // will wait for it to be loaded before executing code requiring contacts
    return;
  });
});