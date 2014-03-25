var nitrogen = require('nitrogen')
  , ImageSnapCamera = require('nitrogen-imagesnap')
  , FSWebcamCamera = require('fswebcam')
  , Store = require('nitrogen-leveldb-store');

// This sample uses your Mac's camera but there are a number of other camera devices supported.  
// See the http://github.com/nitrogenjs/devices project for other options (Rasperry Pi camera,
// Foscam IP camera, etc).

// By default, run against the hosted Nitrogen service in the cloud.  Uncomment the lines below
// to run against a locally running service.

var config = {
//    host: 'localhost',
//    http_port: 3030,
//    protocol: 'http'
};

config.store = new Store(config);

config.log_levels = ['info', 'warn', 'error'];

module.exports = config;
