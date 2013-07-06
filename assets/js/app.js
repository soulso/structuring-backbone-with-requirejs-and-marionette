// define(["marionette", "apps/contacts/list/list_controller"], function(Marionette){ // doesn't work due to circular dependency
define(["marionette"], function(Marionette){
  var ContactManager = new Marionette.Application();

  ContactManager.addRegions({
    mainRegion: "#main-region"
  });

  // to avoid circular dependency, use nested require
  require(["apps/contacts/list/list_controller"], function () {
    // need to use addInitializer instead of ContactManager.on("initialize:after"),
    // because it gets called after the app starts. Using addInitializer ensures code is run even if app already running
    ContactManager.addInitializer(function(){
      ContactManager.ContactsApp.List.Controller.listContacts();
    });
  });

  return ContactManager;
});