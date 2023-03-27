const fsPromises = require("fs").promises;
const { mkdir } = require("fs");
const path = require("path");

const fileOps = async () => {
  try {
    //   Create a new directory called files
    await fsPromises.mkdir("files");

    // Create a new file called starter text inside the files directory and write "hi my name is dave inside it"
    await fsPromises.writeFile(
      path.join(__dirname, "files", "starter.txt"),
      "Hi, my name is dave"
    );
    // Read from the previously created file and console.log the details
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8"
    );
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fileOps();
