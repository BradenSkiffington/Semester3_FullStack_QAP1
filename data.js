// The filesystem (fs) module is used for working with the file system in Node.js. It facilitates tasks like reading, writing,
// and manipulating files and directories. Whether you need to read configuration files, store user data, or interact
// with external files, the fs module provides the necessary functionality.

// Import the 'fs' module
const fs = require("fs");

// Read the contents of a file
fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    // Handle errors, if any
    console.error(err);
    return;
  }
  // Log the contents of the file to the console
  console.log("File contents:");
  console.log(data);
});
