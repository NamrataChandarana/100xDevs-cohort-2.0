// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.
const fs = require("fs");
const path = require("path");

function readFileAndPrint() {
  try {
    const data = fs.readFileSync("./file/a.txt", "utf8");
    console.log("File contents:", data);
    console.log(typeof data);
    // Simulate an increasingly expensive operation
    simulateExpensiveOperation();
  } catch (err) {
    console.error("Error reading file:", err);
  }
  console.log("namste");
}
readFileAndPrint();

function simulateExpensiveOperation() {
  const startTime = Date.now();

  // Perform an expensive operation (e.g., a loop)
  for (let i = 0; i < 1000000000; i++) {
    // This loop is intentionally empty to make it time-consuming
  }

  const endTime = Date.now();
  const elapsedTime = endTime - startTime;

  console.log(`Expensive operation completed in ${elapsedTime} milliseconds\n`);
}
