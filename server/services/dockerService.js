const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const runDockerContainer = (codeFilePath) => {
    const dockerContext = path.resolve(__dirname, '../../docker/node-runner');
    console.log("Docker Context Path:", dockerContext);

    return new Promise((resolve, reject) => {
        const command = `docker build -t node-runner "${dockerContext}" && docker run --rm -v "${codeFilePath}":/usr/src/app/user-code.js node-runner`;

        console.log("Executing Docker Command:", command);

        exec(command, (error, stdout, stderr) => {
            fs.unlink(codeFilePath, (unlinkErr) => {
                if (unlinkErr) {
                    console.error(`Failed to delete ${codeFilePath}:`, unlinkErr);
                } else {
                    console.log(`Deleted temp file: ${codeFilePath}`);
                }
            });

            if (error) {
                console.error("Docker Execution Error:", stderr || error.message);
                return reject(stderr || error.message);
            }

            resolve(stdout);
        });
    });
};

module.exports = { runDockerContainer };
