const { exec } = require('child_process');
const path = require('path');

const runDockerContainer = (codeFilePath) => {
    // Resolve absolute path to avoid issues with relative paths and spaces
    const dockerContext = path.resolve(__dirname, '../../docker/node-runner');

    // Log to make sure you're seeing the actual path used
    console.log("Docker Context Path:", dockerContext);

    return new Promise((resolve, reject) => {
        // Quote the paths to prevent issues with spaces
        const command = `
            docker buildx build --platform linux/amd64 -t node-runner "${dockerContext}" &&
            docker run --rm -v "${codeFilePath}":/usr/src/app/user-code.js node-runner
        `;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error("Docker Execution Error:", stderr || error.message);
                return reject(stderr || error.message);
            }
            resolve(stdout);
        });
    });
};

module.exports = { runDockerContainer };
