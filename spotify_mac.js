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
    }
};
