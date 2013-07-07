requirejs.config({
  baseUrl: 'assets/js',
  paths : {
    json2: 'vendor/json2',
    jquery: 'vendor/jquery',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone',
    marionette : 'vendor/backbone.marionette',
    localstorage: 'vendor/backbone.localstorage',
    tpl: 'vendor/tpl',
    spin: 'vendor/spin',
    'spin.jquery': 'vendor/spin.jquery', // use quotes due to '.' in lib name

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
    },
    'spin.jquery': ['spin', 'jquery'] // note no entry in paths because matches filename (discuss difference with marionette and localstorage paths)
  }
});

require(["apps/../app"], function(ContactManager){
  ContactManager.start();
});