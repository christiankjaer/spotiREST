var exec = require('child_process').exec;
var dbus = require('dbus-native');
var express = require('express');
var app = express();

var conn = dbus.createConnection();


conn.message({
    path:'/org/mpris/MediaPlayer2',
    destination:'org.mpris.MediaPlayer2.spotify',
    'interface':'org.mpris.MediaPlayer2',
    member:'Player.PlayPause',
    type: dbus.messageType.methodReturn
});

conn.on('message', function(msg) { console.log(msg); });
function spotify_command(cmd, arg) {
  var str = "dbus-send --print-reply --dest=org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.";
  str = str + cmd + ' ' + arg;
  console.log(str);
  return str;
}

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/pause', function (req, res) {
  exec(spotify_command('PlayPause', ''), function callback(error, stdout, stderr) {
  });
  res.send('Paused');
})

app.get('/play', function (req, res) {
  exec(spotify_command('Play', ''), function callback(error, stdout, stderr) {
  });
  res.send('Play');
})

app.get('/open/:uri', function (req, res) {
  exec(spotify_command('OpenUri', 'string:' + req.params.uri), function callback(error, stdout, stderr) {
  })
  res.send('Plays: ' + req.params.uri);
})
   

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port


  console.log('Example app listening at http://%s:%s', host, port);
})

