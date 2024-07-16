const express = require('express');
const { main, post, detail, write, login, signup, profile } = require('../controller/page')

const router = express.Router();

router.get('/', main);
router.get('/post', post);
router.get('/post/:id', detail);
router.get('/write', write);

router.get('/login', login);
router.get('/signup', signup);
router.get('/profile/:id', profile);



module.exports = router; 