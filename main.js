var $ = require('jquery');
var movieCollection = require('./imdbCollection');
var movieCollectionView = require('./imdbCollectionView');

$(function () {
  var movies = new movieCollection();

  movies.fetch().then(function (data) {
    console.log("these are the movies: ", movies);
    new movieCollectionView({collection: movies});

  });
});
