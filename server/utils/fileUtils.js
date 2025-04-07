const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const writeUserCodeWithTest = (userCode, testInput, functionName) => {
    const tempDir = path.join(__dirname, '../../docker/node-runner');
    const fileName = `user-code-${uuidv4()}.js`;
    const filePath = path.join(tempDir, fileName);

    const testCode = `
${userCode}

if (typeof ${functionName} !== 'function') {
  console.error('Function "${functionName}" is not defined.');
} else {
  try {
    const result = ${functionName}(${testInput});
    console.log(result);
  } catch (err) {
    console.error("Runtime error:", err.toString());
  }
}
`;

    fs.writeFileSync(filePath, testCode);
    return { filePath, fileName };
};


module.exports = {
    writeUserCodeWithTest,
};
