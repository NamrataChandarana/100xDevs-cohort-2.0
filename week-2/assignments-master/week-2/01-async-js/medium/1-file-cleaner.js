// ## File cleaner

// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was

// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
const fs = require("fs");

function cleanFile(filePath) {
  try {
    // Read the file content
    const originalContent = fs.readFileSync(filePath, "utf-8");

    // Remove all the extra space
    const removeSpace = originalContent.replace(/\s+/g, " ");

    //Write into file
    fs.writeFileSync(filePath, removeSpace);

    console.log(removeSpace);
  } catch (err) {
    console.log(err);
  }
}
const filePath = "./files/a.txt";
cleanFile(filePath);
