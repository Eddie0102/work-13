const express = require('express');
const { post } = require('../controller/post');
const router = express.Router();

router.get('/', post);

module.exports = router;