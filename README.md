# js-zklib

A JavaScript library for interacting with ZK Time & Attendance devices.


## Installation

```bash
npm i js-zklib
```

## Usage

### Available Functions

- `createSocket()`: Establish connection with the device
- `getInfo()`: Get general device information
- `getUsers()`: Retrieve users from the device
- `setUser(uid, userid, name, password, role = 0, cardno = 0)`: Create a new user
- `getAttendances(callback)`: Get all attendance logs
- `getRealTimeLogs(callback)`: Get real-time logs
- `getTime()`: Get current time from the device
- `getSerialNumber()`: Get device serial number
- `getFirmware()`: Get firmware version
- `getPIN()`: Get device PIN
- `getFaceOn()`: Check if face recognition is enabled
- `getSSR()`: Get Self-Service-Recorder status
- `getDeviceVersion()`: Get device version
- `getDeviceName()`: Get device name
- `getPlatform()`: Get platform version
- `getOS()`: Get OS version
- `getWorkCode()`: Get work code
- `getAttendanceSize()`: Get attendance log size
- `clearAttendanceLog()`: Clear attendance logs
- `disconnect()`: Disconnect from the device

### Custom Commands

You can execute custom commands using the `executeCmd` function:

```javascript
async executeCmd(command, data='') {
    return await this.functionWrapper(
        () => this.zklibTcp.executeCmd(command, data),
        () => this.zklibUdp.executeCmd(command, data)
    )
}

// Example: Unlock the door
zkInstance.executeCmd(CMD.CMD_UNLOCK, '')
```

For more commands, refer to the [ZK protocol documentation](https://github.com/adrobinoga/zk-protocol/blob/master/protocol.md).

## Credits

This library is based on:
- [php_zklib](https://github.com/dnaextrim/php_zklib)
- [node-zklib](https://github.com/caobo171/node-zklib)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)
