var lyric = require("./lyrics");
var quotes = require("./quotes");
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + "/public"));

// respond with "Hello World!" on the homepage
app.get('/api/randomlyrics', function (request, response) {
  var randomLyrics = Math.floor(Math.random()*lyric.length);
  response.send(lyric[randomLyrics]);
  // console.log(lyric[randomLyrics]);
});
app.get('/api/lyrics', function (request, response) {
  response.send(lyric);
  // response.send(lyric[0].band +":" + " " + lyric[0].lyric);
});
app.get('/api/quotes', function (request, response) {
  response.send(quotes);
  // response.send(quotes[0].author +":" + " " + quotes[0].quote);
});
// // accept POST request on the homepage
// app.post('/api/hello', function (req, res) {
// res.send('Got a POST request');
// });
// // accept PUT request at /user
// app.put('/api/user', function (req, res) {
// res.send('Got a PUT request at /user');
// });
// // accept DELETE request at /user
// app.delete('/api/user', function (req, res) {
// res.send('Got a DELETE request at /user');
// });

var server = app.listen(app.get("port"), function () {
  var host = server.address().address;
  var port = server.address().port;

console.log('Example app listening at http://%s', host, app.get("port"));
});

// Regular Node code
// var http = require("http");
// // console.log(lyric[randomLyric]);
//
// http.createServer(function(request, response){
//   var randomLyric = Math.floor(Math.random()*lyric.length);
//   response.writeHead(200, {"Content-type": "text/plain"});
//   response.write(lyric[randomLyric]);
//   response.end();
// }).listen(8888);
