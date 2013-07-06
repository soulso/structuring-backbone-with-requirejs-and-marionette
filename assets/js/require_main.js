requirejs.config({
  baseUrl: 'assets/js/vendor',
  paths : {
    marionette : 'backbone.marionette'
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

// requirejs(["assets/js/app.js"], function(ContactManager) {
//   console.log(ContactManager);
// });