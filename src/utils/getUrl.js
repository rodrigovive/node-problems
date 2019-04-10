module.exports = (req, pathname) =>
  `${req.protocol}://${req.get("host")}${
    pathname.match(/^\//) ? "" : "/"
  }${pathname}`;
