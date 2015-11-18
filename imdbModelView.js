var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');



module.exports = Backbone.View.extend({
  tagName: 'section',
  // className: '#ho',
  model: null,
  template: _.template(tmpl.newMovieTmpl),
  events: {
    'click .delete': 'deleteMovie',
    'click .edit' : 'editMovie',

  },
  render: function () {
    var stuff = this.template(this.model.toJSON());
    this.$el.html(stuff);
    return this;
  },
  deleteMovie : function() {
    // var _id = this.model.attributes._id;
    // this.model.destroy(_id);
    this.model.destroy();
    this.remove();
    //does it without having to refresh
  },

  editMovie : function (event){
event.preventDefault();
    var editthingy = this.model;
    editthingy.set ({
           title: $('#title').val() ,
           release: $('#release').val() ,
           cover: $('#cover').val() ,
           plot: $('#plot').val(),
           rating: $('#rating').val() ,

    });
    
    editthingy.save();
    this.render();

  //   var _id = this.model.attributes._id;
  //   _id.set({title:'<%=title%>', release:'<%=release%>', cover: '<%=cover%>', plot:'<%=plot%>', rating:'<%=rating%>'});
  },

  initialize: function () {}

});

//individual movie template/ for deleting and editing one model view// section-movie is where each individual one goes
// .toJSON converts this.model to the data object
