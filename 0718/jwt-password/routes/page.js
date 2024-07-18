const express = require('express');
const { main, login, profile, sign } = require('../controller/page');
const router = express.Router();

router.get('/', main);
router.get('/sign',sign)
router.get('/login', login);
router.get('/profile', profile);

module.exports = router;
