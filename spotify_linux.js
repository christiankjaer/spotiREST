var exec = require('child_process').exec;

function spotify_command(cmd, arg) {
  var str = "dbus-send --print-reply --dest=org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.";
  str = str + cmd + ' ' + arg;
  console.log(str);
  return str;
}

module.exports = {
    open: function (uri) {
        exec(spotify_command('OpenUri', 'string:' + uri), function callback(error, stdout, stderr) {
        })
    },
    playPause: function () {
        exec(spotify_command('PlayPause', ''), function callback(error, stdout, stderr) {
        });
    },
    next: function () {
        exec(spotify_command('Next', ''), function callback(error, stdout, stderr) {
        });
    },
    previous: function () {
        exec(spotify_command('Previous', ''), function callback(error, stdout, stderr) {
        });
    }
};
