define(["apps/../app",
        "tpl!apps/contacts/list/templates/list.tpl",
        "tpl!apps/contacts/list/templates/list_item.tpl"],
       function(ContactManager, listTpl, listItemTpl){
  ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
    List.Contact = Backbone.Marionette.ItemView.extend({
      tagName: "tr",
      template: listItemTpl,

      events: {
        "click": "highlightName",
        "click button.js-delete": "deleteClicked"
      },

      highlightName: function(e){
        this.$el.toggleClass('warning');
      },

      deleteClicked: function(e){
        e.stopPropagation();
        this.trigger("contact:delete", this.model);
      },

      remove: function(){
        this.$el.fadeOut(function(){
          $(this).remove();
        });
      }
    });

    List.Contacts = Backbone.Marionette.CompositeView.extend({
      tagName: "table",
      className: "table table-hover",
      template: listTpl,
      itemView: List.Contact,
      itemViewContainer: "tbody"
    });
  });

  return;
});