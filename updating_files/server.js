const fs = require("fs");
const path = require("path");

// Appending to an already existing file
fs.appendFile(
  path.join(__dirname, "files", "reply.txt"),
  "This is a new file i know",
  (err) => {
    if (err) throw err;
    console.log("appended to existing file");
  }
);

// Appending to a non exisiting file will first create the file then append
fs.appendFile(
  path.join(__dirname, "files", "text.txt"),
  "testing text",
  (err) => {
    console.log("appended to non existing file");
  }
);
