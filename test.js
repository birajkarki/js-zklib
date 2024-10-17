const ZKLib = require('./zklib');

const test = async () => {
    let zkInstance = new ZKLib('192.168.18.42', 4370, 10000, 4000);
    try {
        // Create socket to machine 
        await zkInstance.createSocket();

        // Get Device Serial Number
        const serialNumber = await zkInstance.getSerialNumber();
        console.log('Device Serial Number:', serialNumber); // Store this for later use

        // Event mapping
        const eventMap = {
            0: 'Clock In',
            1: 'Clock Out',
            2: 'Break Out',
            3: 'Break In',
            4: 'Overtime In',
            5: 'Overtime Out'
        };

        // Get real-time logs
        zkInstance.getRealTimeLogs((log) => {
            // Map the event type to a readable format
            console.log(log);
            const action = eventMap[log.eventType] || 'Unknown Event';
            console.log(`Real-time Log: User ID: ${log.userId}, Action: ${action}, Time: ${log.attTime.toISOString()}, Device Serial: ${serialNumber}`);
        });

    } catch (e) {
        console.error('Error:', e);
    } finally {
        // Uncomment if you want to disconnect
        // zkInstance.disconnect();
    }
};

test();
