# Camera

Camera is a Nitrogen device application that watches a device's message stream and reacts to incoming cameraCommand messages.

## Running this application

1. Install OpenCV on the device.  OpenCV is used for motion detection camera commands.
2. Clone this repo onto your target device: `git clone https://github.com/nitrogenjs/camera.git`
3. Install `imagesnap` on your Mac if you are going to use the default config: `brew install imagesnap`.
3. Run `npm install`
4. `node camera.js`

## Running camera as a daemon

1. To run this application as a daemon, modify `scripts/camera` to point to your installation directory and then copy it to /etc/init.d
2. Run `sudo update-rc.d camera defaults` so that it starts at boot.
2. Rebooting or running `/etc/init.d/camera start` will then start the daemon.

## Other Projects

Nitrogen has three other projects that you should have a look at as well.

1. [service](https://github.com/nitrogenjs/service): Core platform responsible for managing principals, security, and messaging.
2. [client](https://github.com/nitrogenjs/client): JavaScript client library for building Nitrogen devices and applications.
3. [admin](https://github.com/nitrogenjs/admin): Web admin tool for working with the Nitrogen service.
4. [device](https://github.com/nitrogenjs/devices): Device principals for common pieces of hardware.
5. [commands](https://github.com/nitrogenjs/commands): CommandManagers and schemas for well known command types.
6. [cli](https://github.com/nitrogenjs/cli): Command line interface for working with the Nitrogen service.
7. [reactor](https://github.com/nitrogenjs/reactor): Always-on hosted application execution platform.
8. [apps](https://github.com/nitrogenjs/apps): Project maintained Nitrogen applications.