const express = require('express');
const { user } = require('../controller/user')
const router = express.Router();
// 객체구조분해할당

router.get('/', user);

module.exports = router;