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

require(["apps/../app"], function(ContactManager){


  // to avoid circular dependency, use nested require
  //
  // we need all sub-applications to be loaded when we start the routing
  // otherwise, a URL fragment already present in the URL would NOT trigger
  // a routing action (since the sub-applications' routing controllers aren't
  // yet listening)
  require(["apps/all"], function () {
    ContactManager.on("initialize:after", function(){
      if(Backbone.history){
        Backbone.history.start();

        if(this.getCurrentRoute() === ""){
            ContactManager.trigger("contacts:list");
        }
      }
    });

    ContactManager.start();
  });
});