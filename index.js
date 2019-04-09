const express = require("express");
const app = express();
const { PORT } = require("./src/config/prod.js");
const route = require('./src/route');
// app.use("/solution");

app.get('/test',(req,res) => {
    res.json({msg: "works"})
})

app.use('/sol',route);

app.listen(PORT, function(e) {
  console.log(`Listening in ${PORT}`);
});
