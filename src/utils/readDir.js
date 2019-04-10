const fs = require("fs");

module.exports = (directoryPath, cb) => {
  try {
    fs.readdir(directoryPath, function(err, files) {
      //handling error
      if (err) {
        return cb({ unable: "Unable to scan directory: " });
      }
      cb(null, files);
    });
  } catch {
    return cb({ error: "error" });
  }
};
