// var $ = require('jquery');
// var movieCollection = require('./imdbCollection');
// var movieCollectionView = require('./imdbCollectionView');
//
// $(function () {
//   var movies = new movieCollection();
//
//   movies.fetch().then(function (data) {
//     console.log(movies);
//     new movieCollectionView({collection: movies});
//
//   });
// });


//where the collection is made


var $ = require('jquery');
var layoutView = require('./layoutView');

$(function () {
  new layoutView();
})
