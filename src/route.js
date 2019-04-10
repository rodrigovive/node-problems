const express = require('express');
const router = express.Router();
const solutionsRoute = require('./route/solution.router');
const {listAvailable, notFound} = require('./controllers/api.controller');

router.use('/solution',solutionsRoute);
router.use('/',listAvailable);
router.use('/*',listAvailable);

module.exports = router;