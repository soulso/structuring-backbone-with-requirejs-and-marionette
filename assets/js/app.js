// define(["marionette", "apps/contacts/list/list_controller"], function(Marionette){ // doesn't work due to circular dependency
define(["marionette", "apps/config/marionette/regions/dialog"], function(Marionette){
  var ContactManager = new Marionette.Application();

  ContactManager.addRegions({
    headerRegion: "#header-region",
    mainRegion: "#main-region",
    dialogRegion: Marionette.Region.Dialog.extend({
      el: "#dialog-region"
    })
  });

  ContactManager.navigate = function(route,  options){
    options || (options = {});
    Backbone.history.navigate(route, options);
  };

  ContactManager.getCurrentRoute = function(){
    return Backbone.history.fragment
  };

  return ContactManager;
});