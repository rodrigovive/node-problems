const express = require("express");
const router = express.Router();
const { listSolutions } = require("../controllers/file-system");
router.get("/", listSolutions);

module.exports = router;
