const express = require("express");
const router = express.Router();
const {
  listSolutions,
  getSolution,
  getSolutionMethod
} = require("../controllers/solutions.controller");
router.get("/", listSolutions);
router.get("/:solution", getSolution);
router.get("/:solution/:method", getSolutionMethod);

module.exports = router;
