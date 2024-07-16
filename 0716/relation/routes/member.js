const express = require('express');
const { signup, find, login } = require('../controller/member');
const router = express.Router();


router.post('/signup', signup);
router.post('/login', login);
router.get('/info/:id', find);


module.exports = router;
// ---1