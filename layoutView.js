
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var HeaderView = require('./headerView');
var FormView = require('./formView');
var MovieView = require('./imdbCollectionView');
var MovieCollection = require('./imdbCollection');

module.exports = Backbone.View.extend({
  el : "#layoutView",
  initialize: function (){
    var self = this;
    var headerINFO = new HeaderView();
    var collectionOfMovies = new MovieCollection();
    collectionOfMovies.fetch().then(function (){
      var movieINFO = new MovieView ({collection: collectionOfMovies});
      var formINFO = new FormView({collection: collectionOfMovies});

      // self.$el.find('header').html(headerINFO.render().el);
      // self.$el.find('aside').html(formINFO.render().el);
        self.$el.prepend(headerINFO.render().el);
        self.$el.prepend(formINFO.render().el);

    });
  },
});
