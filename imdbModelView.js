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
    var id = this.model.attributes._id;
    this.model.destroy(id);
  },

  editMovie : function (){
    console.log(id);

    var id = this.model.attributes._id;
    id.set({title:'<%=title%>', release:'<%=release%>', cover: '<%=cover%>', plot:'<%=plot%>', rating:'<%=rating%>'});
  },

  initialize: function () {}

});
