define(["apps/../app",
        "tpl!apps/header/list/templates/list.tpl",
        "tpl!apps/header/list/templates/list_item.tpl"],
       function(ContactManager, listTpl, listItemTpl){
  ContactManager.module('HeaderApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
    List.Header = Marionette.ItemView.extend({
      template: listItemTpl,
      tagName: "li",

      events: {
        "click a": "navigate"
      },

      navigate: function(e){
        e.preventDefault();
        this.trigger("navigate", this.model);
      },

      onRender: function(){
        if(this.model.selected){
          // add class so Bootstrap will highlight the active entry in the navbar
          this.$el.addClass("active");
        };
      }
    });

    List.Headers = Marionette.CompositeView.extend({
      template: listTpl,
      className: "navbar navbar-inverse navbar-fixed-top",
      itemView: List.Header,
      itemViewContainer: "ul",

      events: {
        "click a.brand": "brandClicked"
      },

      brandClicked: function(e){
        e.preventDefault();
        this.trigger("brand:clicked");
      }
    });
  });
});