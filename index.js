const express = require("express");
const app = express();
const { PORT } = require("./src/config/prod.js");
const route = require("./src/route");
// app.use("/solution");

app.get("/test", (req, res) => {
  res.json({ msg: "works" });
});

app.use("/api", route);
app.use(function(req, res, next) {
  return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
});
// Any error
app.use(function(err, req, res, next) {
  return res.status(500).send({ error: err });
});
app.listen(PORT, function(e) {
  console.log(`Listening in ${PORT}`);
});
