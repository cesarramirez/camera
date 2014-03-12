var async  = require('async')
  , config = require('./config')
  , nitrogen = require('nitrogen')
  , OpenCVCameraManager = require('nitrogen-opencv-camera');

var service = new nitrogen.Service(config);

async.each(config.cameras, function(camera, callback) {
    service.connect(camera, function(err, session, camera) {
        if (err) { return console.log('failed to connect camera: ' + err); }

	      // startup opencv based camera manager (supports software based motion detection) for this camera. 
        new OpenCVCameraManager(camera).start(session, function(err, message) {
            if (err) return session.log.error(JSON.stringify(err));
        });

    });

    return callback();
});
