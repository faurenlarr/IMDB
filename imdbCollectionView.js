var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var movieView = require('./imdbModelView');
var movieModel = require('./imdbModel');


module.exports = Backbone.View.extend({
  el: '.container',
  events: {
    'click .send-stuff': 'submitMovie',

  },

  submitMovie : function(event){
    event.preventDefault();
    var self = this;
    var newMovie = {
        title: $('#title').val() || 'A really good movie',
        release: $('#release').val() || '90s',
        cover: $('#cover').val() || 'http://www.placecage.com/100/200',
        plot: $('#plot').val() || 'Lots of things happen',
        rating: $('#rating').val() || '5',
      };
      console.log(newMovie);
      var newMovieToSubmit = new movieModel(newMovie);
      newMovieToSubmit.save().then(function (){
      self.collection.add(newMovieToSubmit);
      self.addMovie(newMovieToSubmit);
    });
$('#title').val("");
$('#release').val("");
$('#cover').val("") ;
$('#plot').val("");
$('#rating').val("");

   },
   
  initialize: function (){
    this.addAllMovies();
  },
  addMovie: function (movieModel) {
    console.log(movieModel);
    var MovieView = new movieView({model: movieModel});
    this.$el.append(MovieView.render().el);
  },
  addAllMovies: function(){
    _.each(this.collection.models, this.addMovie, this);

  }

});

//working with entire collection // puts it on the page // container is where they all go
//submitMovie adds a movie as a new model and adds that model to the collection. add movie adds that movie model to a movie view,
//and add all movies adds the one movie view to the collection view, which is appended to the page on initialize.
