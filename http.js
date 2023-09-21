// The http module in Node.js is essential for building web applications and API's.
// It enables the creation of http servers and the issuance of http requests
// You can define server behavior for handling incoming requests and sending appropriate responses.

// Import the 'http' module
const http = require("http");

// Create an HTTP server using the 'createServer' method
const server = http.createServer((req, res) => {
  // Set the HTTP response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body
  res.end("Hello, World!\n");
});

// Listen on port 3000 and log a message when the server starts
server.listen(3000, "localhost", () => {
  console.log("Server is running at http://localhost:3000/");
});
