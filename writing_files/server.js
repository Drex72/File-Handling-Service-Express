const fs = require("fs");
const path = require("path");

fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "This is a new file",
  (err) => {
    if (err) throw err;
  }
);
