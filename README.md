# Camera 

Camera is a Nitrogen device application that watches a device's message stream and reacts to incoming cameraCommand messages.

## Running this application

1. Install OpenCV on the device.  OpenCV is used for motion detection camera commands.
2. Clone this repo onto your target device: `git clone https://github.com/nitrogenjs/camera.git`
3. Run `npm install` 
4. `node camera.js`

To run this application as a daemon, modify `camera` to point to your installation direct and then copy it to /etc/init.d 
Rebooting or running `/etc/init.d/camera start` will then start the daemon. 

## Other Projects

Nitrogen has three other projects that you should have a look at as well.

1. [service](https://github.com/magentajs/service): The core Nitrogen service responsible for managing users, devices, and messaging between them.
2. [client](https://github.com/magentajs/client): The client library for building Nitrogen devices and applications.
3. [admin](https://github.com/magentajs/admin): An administrative tool for managing the Nitrogen service.
