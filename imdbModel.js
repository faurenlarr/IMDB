var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/niccagemovies',
  idAttribute: '_id',
  defaults: {
    title: "NIC CAGE MOVIE",
    release: "1990",
    cover: "http://www.placecage.com/200/300",
    plot: "something stupid",
    rating: "2"
  },
  initialize: function () {

  }
});



// NEED DEFAULTS TO WORK- ones on this page
//extra form for editing only/edit not working
//need to load without refreshing
