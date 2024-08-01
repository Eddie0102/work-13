const express = require('express');
const { signup, find, login, update, deleteFunc } = require('../controller/member');
const router = express.Router();


router.post('/signup', signup);
router.post('/login', login);
router.get('/info/:id', find);
router.get('/update', update);
router.get('/delete', deleteFunc);


// ---1
module.exports = router;