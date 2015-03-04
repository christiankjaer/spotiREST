var express = require('express');
var app = express();
var os = require('os');
var spotify_control;


if (os.platform() === "linux") {
    spotify_control = require('./spotify_linux');
} else if (os.platform() === 'darwin') {
    spotify_control = require('./spotify_mac');
}


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/pause', function (req, res) {
  spotify_control.playPause();
  res.send('Paused');
})

app.get('/play', function (req, res) {
  exec(spotify_command('Play', ''), function callback(error, stdout, stderr) {
  });
  res.send('Play');
})

app.get('/open/:uri', function (req, res) {
  spotify_control.open(req.params.uri);
  res.send('Plays: ' + req.params.uri);
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port);
})


