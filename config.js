var nitrogen = require('nitrogen')
  , FoscamCamera = require('nitrogen-foscam');

// This sample connects to a Foscam IP based camera.  There is a simple interface for 
// implementing a camera driver for other camera types (directly connected via USB etc).  See the implementation
// in http://github.com/nitrogenjs/foscam for an example.  

var config = {};

config.store = new nitrogen.FileStore(config);
config.cameras = [
    new FoscamCamera({
        nickname: 'camera',
         config: {
            host: '192.168.1.1',
            port: 80,
            user: 'admin',
            password: 'mypass'
         }
    })
];

module.exports = config;
