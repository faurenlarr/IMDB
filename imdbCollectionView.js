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
  // render: function () {
  //   var stuff = this.template(this.model.toJSON());
  //   this.$el.html(stuff);
  //   return this;
  // },
  submitMovie : function(event){
    var newMovie = {
        title: this.$el.find('input[class="title"]').val(),
        release: this.$el.find('input[class="release"]').val(),
        cover: this.$el.find('input[class="cover"]').val(),
        plot: this.$el.find('input[class="plot"]').val(),
        rating: this.$el.find('input[class="rating"]').val(),
      };
      console.log(newMovie);
      var newMovieToSubmit = new movieModel(newMovie);
          newMovieToSubmit.save();
          this.collection.add(newMovieToSubmit);
          this.addMovie(newMovieToSubmit);

//           setTimeout(function(){
//       //this.render();
// }, 500);
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
