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

app.get('/playpause', function (req, res) {
  spotify_control.playPause();
  res.send('Paused');
})

app.get('/open/:uri', function (req, res) {
  spotify_control.open(req.params.uri);
  res.send('Plays: ' + req.params.uri);
})

app.get('/next', function (req, res) {
  spotify_control.next();
  res.send('Next');
})
app.get('/previous', function (req, res) {
  spotify_control.previous();
  res.send('Next');
})

app.get('/current', function (req, res) {
    // Sends the res object to the control, then it can be used in the callback
    spotify_control.current(res);
})


var server = app.listen(3000, function () {
})


