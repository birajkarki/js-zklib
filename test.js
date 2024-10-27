// const ZKLib = require('./zklib');

// const test = async () => {
//     let zkInstance = new ZKLib('192.168.18.42', 4370, 10000, 4000);

//     try {
//         // Create socket to machine 
//         await zkInstance.createSocket();

//         // Get Device Serial Number
//         const serialNumber = await zkInstance.getSerialNumber();
//         console.log('Device Serial Number:', serialNumber);

//         // Event mapping for user actions
//         const eventMap = {
//             0: 'Clock In',
//             1: 'Clock Out',
//             2: 'Break Out',
//             3: 'Break In',
//             4: 'Overtime In',
//             5: 'Overtime Out'
//         };

//         // Function to format date and time
//         function formatDateTime(date) {
//             const localDate = new Date(date); // Convert to local date
//             const year = localDate.getFullYear();
//             const month = String(localDate.getMonth() + 1).padStart(2, "0");
//             const day = String(localDate.getDate()).padStart(2, "0");
//             const hours = String(localDate.getHours()).padStart(2, "0");
//             const minutes = String(localDate.getMinutes()).padStart(2, "0");
//             const seconds = String(localDate.getSeconds()).padStart(2, "0");
//             return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
//         }

//         // Fetch attendance logs
//         const attendanceLogs = await zkInstance.getAttendances();
//         console.log('Attendance Logs:', attendanceLogs);
//         if (attendanceLogs && Array.isArray(attendanceLogs.data)) {
//             // Iterate over each log in attendanceLogs.data
//             for (const log of attendanceLogs.data) {
//                 // Map event type to human-readable action
//                 const action = eventMap[log.verifyState] || 'Unknown Event';
//                 const formattedTime = formatDateTime(log.recordTime); // Format log time

//                 // Log output in specified format
//                 console.log('Real-time Log Entry:', {
//                     userId: log.userSn,
//                     action: action,
//                     time: formattedTime,
//                     deviceId: serialNumber,
//                     machineID: 'MACHINE987' // Replace with actual machine ID if available
//                 });
//             }
//         } else {
//             console.error("attendanceLogs is not iterable. Received:", attendanceLogs);
//         }
//     } catch (e) {
//         console.error('Error:', e);
//     } finally {
//         // Disconnect if needed
//         await zkInstance.disconnect();
//     }
// };

// test();



// const ZKLib = require('./zklib');

// async function clearAllLogs(ip, port, timeout) {
//   const zkInstance = new ZKLib(ip, port, timeout);

//   try {
//     // Attempt to create a socket and connect to the device
//     await zkInstance.createSocket(
//       (err) => console.error('Error creating socket:', err),
//       (info) => console.log('Socket closed:', info)
//     );

//     // Clear attendance logs
//     await zkInstance.clearAttendanceLog();
//     console.log('Successfully cleared the attendance logs.');
//   } catch (err) {
//     console.error('Error during clearing logs:', err);
//   } finally {
//     // Disconnect to safely terminate the session
//     await zkInstance.disconnect();
//     console.log('Disconnected from device.');
//   }
// }

// // Test the clearAllLogs function
// async function test() {
//   const ip = '192.168.18.42'; // Update with your device's IP
//   const port = 4370; // Update with your device's port
//   const timeout = 5000; // Optional timeout; adjust as needed

//   console.log('Starting test to clear all logs...');
//   await clearAllLogs(ip, port, timeout);
//   console.log('Test complete.');
// }

// test();

const ZKLib = require('./zklib');

const test = async () => {
    let zkInstance = new ZKLib('192.168.18.42', 4370, 10000, 4000);

    try {
        // Create socket to machine
        await zkInstance.createSocket();

        // Listen for real-time logs
        zkInstance.getRealTimeLogs(async (log) => {
            console.log('Real-time log received:', log);
            
            // Example: Add any further processing of the log data here if needed
        });

    } catch (e) {
        console.error('Error:', e);
        await zkInstance.disconnect(); // Disconnect if an error occurs
    }

    // Note: No disconnect in finally to keep listening
};

test();
