const express = require('express');
const controller = require('../controller/comment');
const router = express.Router();

// 객체 구조분해 할당으로 분리해서 사용하는 법 연습

router.get('/', controller.main);
router.get('/comments',controller.comments);
router.get('/comment/:page',controller.comment);

module.exports =router;