const { exec } = require('child_process');
const path = require('path');

// Runs a Docker container using the provided code file path
const runDockerContainer = (codeFilePath) => {
    const dockerContext = path.join(__dirname, '../../docker/node-runner');

    return new Promise((resolve, reject) => {
        const command = `
      docker build -t node-runner ${dockerContext} &&
      docker run --rm -v ${codeFilePath}:/usr/src/app/user-code.js node-runner
    `;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                return reject(stderr || error.message);
            }
            resolve(stdout);
        });
    });
};

module.exports = { runDockerContainer };
