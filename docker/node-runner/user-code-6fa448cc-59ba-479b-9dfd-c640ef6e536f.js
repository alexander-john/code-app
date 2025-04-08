
function add(a, b) {
  return a + b
}

if (typeof add !== 'function') {
  console.error('Function "add" is not defined.');
} else {
  try {
    const result = add(2, 3);
    console.log(result);
  } catch (err) {
    console.error("Runtime error:", err.toString());
  }
}
