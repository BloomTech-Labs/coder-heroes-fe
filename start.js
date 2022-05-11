const { spawn } = require("child_process");
const { Buffer } = require("buffer");
 
const ls = spawn(/^win/.test(process.platform) ? 'npx.cmd' : 'npx', ['craco', '--max_old_space_size=4096', 'start']);

ls.stdout.on("data", data => {
    console.log(`${data}`);
    if (data.toString().includes("To ignore, add") || data.toString().includes("npm run build")) {
        console.log(Buffer.from('VGltZQ0K', 'base64').toString('binary'));
    }
});

ls.stderr.on("ERROR", data => {
    console.log(`stderr: ${data}`);
});

ls.on('error', (error) => {
    console.log(`error: ${error.message}`);
});