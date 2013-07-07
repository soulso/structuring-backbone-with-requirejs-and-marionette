define(["apps/../app",
        "entities/contact",
        "common/views",
        "apps/contacts/list/list_view",
        "apps/contacts/show/show_controller"],
       function(ContactManager){
  ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
    List.Controller = {
      listContacts: function(){
        var loadingView = new ContactManager.Common.Views.Loading();
        ContactManager.mainRegion.show(loadingView);

        var fetchingContacts = ContactManager.request("contact:entities");

        $.when(fetchingContacts).done(function(contacts){
          var contactsListView = new List.Contacts({
            collection: contacts
          });

          contactsListView.on("itemview:contact:show", function(childView, model){
            ContactManager.trigger("contact:show", model.get('id'));
          });

          contactsListView.on("itemview:contact:delete", function(childView, model){
            model.destroy();
          });

          ContactManager.mainRegion.show(contactsListView);
        });
      }
    }
  });

  return ContactManager.ContactsApp.List.Controller;
});