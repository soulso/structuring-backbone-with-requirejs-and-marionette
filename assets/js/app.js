// define(["marionette", "apps/contacts/list/list_controller"], function(Marionette){ // doesn't work due to circular dependency
define(["marionette"], function(Marionette){
  var ContactManager = new Marionette.Application();

  ContactManager.addRegions({
    mainRegion: "#main-region",
    dialogRegion: "#dialog-region"
  });

  ContactManager.navigate = function(route,  options){
    options || (options = {});
    Backbone.history.navigate(route, options);
  };

  ContactManager.getCurrentRoute = function(){
    return Backbone.history.fragment
  };

  // to avoid circular dependency, use nested require
  //
  // we need all sub-applications to be loaded when we start the routing
  // otherwise, a URL fragment already present in the URL would NOT trigger
  // a routing action (since the sub-applications' routing controllers aren't
  // yet listening)
  require(["apps/all"], function () {
    // need to use addInitializer instead of ContactManager.on("initialize:after"),
    // because it gets called after the app starts. Using addInitializer ensures code is run even if app already running
    ContactManager.addInitializer(function(){
      if(Backbone.history){
        Backbone.history.start();

        if(this.getCurrentRoute() === ""){
            ContactManager.trigger("contacts:list");
        }
      }
    });
  });

  return ContactManager;
});