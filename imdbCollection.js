var Backbone = require('backbone');
var ItemModel = require('./imdbModel');

module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/niccagemovies',
  model: ItemModel
});


//need to connect to the itemmodel page to add the model to collection
