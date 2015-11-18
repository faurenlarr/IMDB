var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;


module.exports = Backbone.View.extend({
  tagName: 'section',
  className: 'movie',
  template: _.template($('#newMovieTmpl').html()),
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
    var _id = this.model.attributes._id;
    console.log(_id);
    this.model.destroy(_id);
  },

  editMovie : function (){
    var _id = this.model.attributes._id;
    _id.set({title:'<%=title%>', release:'<%=release%>', cover: '<%=cover%>', plot:'<%=plot%>', rating:'<%=rating%>'});
      console.log(_id);
  },

  initialize: function () {}

});
