function fibonacci(n, a = 0, b = 1) {
  if (n === 0) {
    return a;
  }
  if (n === 1) {
    return b;
  }
  return fibonacci(n - 1, b, a + b);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
