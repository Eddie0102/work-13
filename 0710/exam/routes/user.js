const express = require('express');
const controller = require('../controller/user');
const router = express.Router();


router.get('/', controller.main);
router.get('/get', controller.get);
router.get('/post',controller.post);

//=======데이터 요청, 응답
router.get('/resultGet',controller.resultGet);

router.post('/resultPost',controller.resultPost);

module.exports =router;