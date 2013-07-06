requirejs.config({
  baseUrl: 'assets/js',
  paths : {
    json2: 'vendor/json2',
    jquery: 'vendor/jquery',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone',
    marionette : 'vendor/backbone.marionette',
    tpl: 'vendor/tpl',

    apps: "apps",
    entities: "entities"
  },
  
  shim : {
    underscore : {
      exports : '_'
    },
    backbone : {
      deps : ['jquery', 'underscore', 'json2'],
      exports : 'Backbone'
    },
    marionette : {
      deps : ['backbone'],
      exports : 'Marionette'
    }
  }
});

require(["apps/../app"], function(ContactManager){
  ContactManager.start();
});