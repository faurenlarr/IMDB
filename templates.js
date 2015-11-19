module.exports = {

newMovieTmpl: [
  "<header>",
      "<div class='words'>",
        "<h1 class='title'><%=title%></h1>",
        "<h3>Release date: <%=release%></h3>",
        "<h3>Plot: <%=plot%></h3>",
        "<h3>Rating: <%=rating%> stars</h3>",
        "<button data-id='<%=_id%>' class='delete'>delete movie</button>",
        "<button data-id='<%=_id%>' class='edit'>edit movie</button>",
      "</div>",
      "<img src='<%=cover%>' alt='' />",
  "</header>"

  ].join(""),


form: [
  "<form class='movieform'>",
    "<input type='text' id='title' class='title' placeholder='title'>",
    "<input type='text' id='release' class='release' placeholder='release date'>",
    "<input type='text' id='cover' class='cover' placeholder='cover photo url' >",
    "<input type='text' id='plot' class='plot' placeholder='plot'>",
    "<input type='text' id='rating' class='rating' placeholder='rating(1-5 stars)'>",
    "<button class='send-stuff'>submit</button>",
  "</form>"
].join(""),


header:[
  "<nav class='navbar'>",
  "<h1 class='title'>IMDbACKBONE</h1>",
  "</nav>"
 ].join(""),


};
