const spawn = require('child_process').spawn
const child = spawn('python', ['./src/database/consult.py']);

child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
});

// const odbc = require('odbc');

// async function banke_odbc() {
//     const db = await odbc.connect('DSN=Banke6');
// }

// console.log("\n ==========> ODBC conection  successful. <===========\n")

// module.exports = { banke_odbc };
