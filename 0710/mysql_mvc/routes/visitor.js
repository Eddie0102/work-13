const express = require('express');
const controller = require('../controller/visitor');
const { route } = require('../../express/routes/user');
const router = express.Router();

// 방명록에 관련된 데이터 처리하는 라우터
// localhost:8000/api/visitor

// get방명록 전체 보이기
router.get('/', controller.allVisitor);

module.exports = router;