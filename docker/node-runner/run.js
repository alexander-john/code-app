const fs = require('fs');
const vm = require('vm');

const filePath = './user-code.js';
const code = fs.readFileSync(filePath, 'utf8');

try {
  const script = new vm.Script(code);
  const context = { console };
  vm.createContext(context);
  script.runInContext(context, { timeout: 3000 });
} catch (err) {
  console.error(err.toString());
}
