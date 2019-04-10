"use strict";
 
const fs = require("fs");
const path = require("path");
const spawn = require("child_process").spawn;
const textFile = path.join(__dirname, "text.txt");
exports.watchingFileChanges = cb => {
  fs.watch(textFile, (err) => {
    console.log("File changed!");
  });
  console.log("Now watching text.txt for changes ...");
  cb(null, {
    msg: "Now watching text.txt for changes ..."
  });
};

exports.watchingFileChangesSpawn = cb => {
  fs.watch(textFile, () => {
    const ls = spawn("ls", ["-l", "-h", "text.txt"]);
    ls.stdout.pipe(process.stdout);
  });
  console.log("Now watching text.txt for changes ...");
  cb(null, {
    msg: "Now watching text.txt for changes ..."
  });
};

exports.watchingFileChangesSpawnParse = cb => {
  fs.watch(textFile, () => {
    const ls = spawn("ls", ["-l", "-h", "text.txt"]);
    let output = "";
    ls.on("close", () => {
      const parts = output.split(/|s+/);
      console.log([parts[0], parts[4], parts[8]]);
    });
  });
  console.log("Now watching text.txt for changes ...");
  cb(null, {
    msg: "Now watching text.txt for changes ..."
  });
};

exports.readSimple = cb => {
  fs.readFile(textFile, (err, data) => {
    if (err) return cb({ error: "Error in server" });
    cb(null, {
      data: data.toString()
    });
  });
};

exports.writeSimple = cb => {
  fs.writeFile(textFile, " Some Text ", err => {
    if (err) return cb({ error: "Error in server" });
    cb(null, {
      msg: `${textFile} was edited`
    });
  });
};

exports.createReadStream = cb => {

    fs.createReadStream(textFile)
        .on('data', chunk => process.stdout.write(chunk))
        .on('error',err => process.stderr.write('Error'))

}