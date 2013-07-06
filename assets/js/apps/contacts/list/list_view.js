define(["apps/../app", "tpl!apps/contacts/list/templates/list_item.tpl"], function(ContactManager, listItemTpl){
  ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
    List.Contact = Backbone.Marionette.ItemView.extend({
      tagName: "li",
      template: listItemTpl
    });

    List.Contacts = Backbone.Marionette.CollectionView.extend({
      tagName: "ul",
      itemView: List.Contact
    });
  });

  return;
});