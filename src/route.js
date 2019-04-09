const express = require('express');
const router = express.Router();
const fileSystemRoute = require('./route/file-system');
router.use('/file-system',fileSystemRoute);

module.exports = router;