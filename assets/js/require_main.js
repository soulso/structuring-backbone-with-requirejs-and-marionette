requirejs.config({
  baseUrl: 'assets/js',
  paths : {
    json2: 'vendor/json2',
    jquery: 'vendor/jquery',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone',
    marionette : 'vendor/backbone.marionette',

    apps: "apps"
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

requirejs(["jquery", "underscore", "backbone", "marionette"], function($, _, Backbone, Marionette) {
  console.log("jQuery version: ", $.fn.jquery);
  console.log("_.identity(5): ", _.identity(5));
  window.$ = $;
  window.Backbone = Backbone;
  console.log(Marionette);
});