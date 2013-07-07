// define(["marionette", "apps/contacts/list/list_controller"], function(Marionette){ // doesn't work due to circular dependency
define(["marionette"], function(Marionette){
  var ContactManager = new Marionette.Application();

  ContactManager.addRegions({
    mainRegion: "#main-region"
  });

  ContactManager.navigate = function(route,  options){
    options || (options = {});
    Backbone.history.navigate(route, options);
  };

  ContactManager.getCurrentRoute = function(){
    return Backbone.history.fragment
  };

  // need to use addInitializer instead of ContactManager.on("initialize:after"),
  // because it gets called after the app starts. Using addInitializer ensures code is run even if app already running
  ContactManager.addInitializer(function(){
    if(Backbone.history){
      Backbone.history.start();

      if(this.getCurrentRoute() === ""){
        // to avoid circular dependency, use nested require
        //
        // need to keep this dependency so that the list controller is loaded when
        // the "contacts:list" event gets triggered (otherwise the event gets triggered
        // before there's a listener for it and nothing will happen)
        require(["apps/contacts/contacts_app"], function () {
          ContactManager.trigger("contacts:list");
        });
      }
    }
  });

  return ContactManager;
});