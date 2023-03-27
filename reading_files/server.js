const fs = require("fs");
const path = require("path");

// Read File without encoding
fs.readFile(path.join(__dirname, "files", "starter.txt"), (err, data) => {
  if (err) throw err;
  // Returns a buffer of the text
  console.log(data);
  // Returns a readable version of the buffer
  console.log(data.toString());
});

// Read File with encoding
fs.readFile("./files/starter.txt", "utf8", (err, data) => {
  if (err) throw err;
  // Returns a readable version of the buffer becuase of the encoding
  console.log(data);
});

// Exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught exception: ${err}`);
  process.exit(1);
});
