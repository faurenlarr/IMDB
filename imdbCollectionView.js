var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var movieView = require('./imdbModelView');



module.exports = Backbone.View.extend({
  el: '.content',
  collection: null,


  initialize: function (){
    this.addAllMovies();
    this.listenTo(this.collection, 'change', this.addAllMovies);

  },
  addMovie: function (movieModel) {
    console.log(movieModel);
    var MovieView = new movieView({model: movieModel});
    this.$el.append(MovieView.render().el);

  },
  addAllMovies: function(){
      $('.content').html("");
    _.each(this.collection.models, this.addMovie, this);

  }

});

//working with entire collection // puts it on the page // container is where they all go
//submitMovie adds a movie as a new model and adds that model to the collection. add movie adds that movie model to a movie view,
//and add all movies adds the one movie view to the collection view, which is appended to the page on initialize.
