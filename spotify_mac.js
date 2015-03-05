var applescript = require('applescript');

module.exports = {
    open: function (uri) {
        var script = 'tell application "Spotify" to play track "' + uri +'"';
        applescript.execString(script, function(err, rtn) {
        });
        console.log(script);
    },
    playPause: function () {
        var script = 'tell application "Spotify" to playpause';
        applescript.execString(script, function(err, rtn) {
        });
    },
    next: function () {
        var script = 'tell application "Spotify" to next track';
        applescript.execString(script, function(err, rtn) {
        });
    },
    previous: function () {
        var script = 'tell application "Spotify" to previous track';
        applescript.execString(script, function(err, rtn) {
        });
    },
    current: function (finished) {
        var script = 'tell application "Spotify" to set theId to id of current track';
        applescript.execString(script, function(err, rtn) {
            finished.send(rtn);
        });
    }
};
