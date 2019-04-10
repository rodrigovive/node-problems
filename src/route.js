const express = require('express');
const router = express.Router();
const solutionsRoute = require('./route/solution.router');
router.use('/solution',solutionsRoute);

module.exports = router;