var lyrics = "";

$.get("/api/lyrics", function(data){
  lyric = data;
  // console.log(lyric);
  for (var i=0;i<lyric.length;i++){
  $("<p>"+lyric[i].band+":"+ " " + "'" + lyric[i].lyric+ "'"+"</p>").appendTo(".lyrics");
  }
});

var randomlyric = "";

$.get("/api/randomlyrics", function(data){
  randomlyric = data;
  $("<p>"+data.band+":"+ " " + "'" + data.lyric+ "'"+"</p>").appendTo(".randomLyrics");
});

var quotes = "";

$.get("/api/quotes", function(data){
  quotes = data;
  // console.log(quotes);
  for (var i=0;i<quotes.length;i++){
  $("<p>"+quotes[i].author+":"+ " " + "'" + quotes[i].quote+ "'"+"</p>").appendTo(".quotes");
  }
});
