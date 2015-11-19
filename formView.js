var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var movieModel = require('./imdbModel');


module.exports = Backbone.View.extend({
  className: 'addMovie',
    model: null, // just here as placeholder, but need a model up on instantiation
    events: {
      'submit form': 'submitMovie',
    },
    initialize: function () {
      if(!this.model) {
        this.model = new movieModel();
      }
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
          // self.addMovie(newMovieToSubmit);
        });
    $('#title').val("");
    $('#release').val("");
    $('#cover').val("") ;
    $('#plot').val("");
    $('#rating').val("");

       },

       template: _.template(tmpl.form),
       render: function () {
         var stuff = this.template(this.model.toJSON());
         this.$el.html(stuff);
         return this;
       },


});
