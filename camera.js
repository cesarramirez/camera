var config = require('./config')
  , nitrogen = require('nitrogen')
  , CommandCamCamera = require('commandcam')
  , ImageSnapCamera = require('nitrogen-imagesnap')
  , FSWebcamCamera = require('fswebcam')
  , CameraManager = require('nitrogen-camera');

var service = new nitrogen.Service(config);

var cameraConfig =  {
    api_key: config.api_key,
    nickname: 'camera',
    name: "Camera"
};

var camera;
switch (process.platform){
    case "darwin":
        camera = new ImageSnapCamera(cameraConfig);
        break;
    case "linux":
        camera = new FSWebcamCamera(cameraConfig);
        break;
    case "win32":
        camera = new CommandCamCamera(cameraConfig);
        break;
    default:
        console.log('Platform not known, falling back to ImageSnapCamare');
        camera = new ImageSnapCamera(cameraConfig);
        break;
}

service.connect(camera, function(err, session, camera) {
    if (err) { return console.log('failed to connect camera: ' + err); }

    new CameraManager(camera).start(session, function(err, message) {
        if (err) return session.log.error(JSON.stringify(err));
    });
});
