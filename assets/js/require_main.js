requirejs.config({
  baseUrl: 'assets/js',
  paths : {
    json2: 'vendor/json2',
    jquery: 'vendor/jquery',
    'jquery-ui': 'vendor/jquery-ui',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone',
    'backbone.picky': 'vendor/backbone.picky',
    'backbone.syphon': 'vendor/backbone.syphon',
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
    'backbone.picky': ['backbone'],
    'backbone.syphon': ['backbone'],
    marionette : {
      deps : ['backbone'],
      exports : 'Marionette'
    },
    'jquery-ui': ['jquery'],
    'spin.jquery': ['spin', 'jquery'] // note no entry in paths because matches filename (discuss difference with marionette and localstorage paths)
  }
});

require(["apps/../app", "apps/header/header_app"], function(ContactManager){
  ContactManager.start();
});