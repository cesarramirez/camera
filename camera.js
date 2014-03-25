var config = require('./config')
  , nitrogen = require('nitrogen')
//  , ImageSnapCamera = require('nitrogen-imagesnap')
  , FSWebcamCamera = require('fswebcam')
  , CameraManager = require('nitrogen-camera');

var service = new nitrogen.Service(config);

var camera = new FSWebcamCamera({
    nickname: 'camera',
    name: "Camera"
})

service.connect(config.camera, function(err, session, camera) {
    if (err) { return console.log('failed to connect camera: ' + err); }

    new CameraManager(camera).start(session, function(err, message) {
        if (err) return session.log.error(JSON.stringify(err));
    });

    return callback();
});
