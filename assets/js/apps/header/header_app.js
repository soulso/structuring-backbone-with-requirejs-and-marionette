define(["apps/../app", "apps/header/list/list_controller"], function(ContactManager){
  ContactManager.module('HeaderApp', function(Header, ContactManager, Backbone, Marionette, $, _){
    var API = {
      listHeader: function(){
        Header.List.Controller.listHeader();
      }
    };

    Header.on("start", function(){
      API.listHeader();
    });
  });
});