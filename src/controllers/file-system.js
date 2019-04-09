const fs = require("fs");
const path = require("path");

exports.listSolutions = (req, res) => {
  // res.json({msg: 'List solutions of file system'})
  const directoryPath = path.join(__dirname, "../solutions/file-system");
  //passsing directoryPath and callback function
  fs.readdir(directoryPath, function(err, files) {
    //handling error
    if (err) {
      return res.status(404).json({unable: "Unable to scan directory: "});
    }
    
    return res.status(200).json(files);
  });
};
