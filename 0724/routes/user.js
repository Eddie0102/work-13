const express = require('express');
const { createUser, createWaiting, login } = require('../controller/user');
const router = express.Router();

// 고객 생성
router.post('/createuser', createUser);
// 대기열 생성
router.post('/createwaiting', createWaiting);
// 로그인
router.post('/login',login)
// 고객 한명 조회
// 대기열
module.exports = router;