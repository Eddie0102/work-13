const express = require('express');
const { all, write, one , updateFunc, deleteFunc} = require('../controller/post');
const router = express.Router();

// get /all 전체글 조회
router.get('/all', all);

// post /writr 글 하나생성
router.post('/write', write);
// get /:id 글 하나 조희
router.get('/:id', one);
// patch /update 글 하나 수정
router.patch('/update',updateFunc)
// delete /delete 글 하나 삭제
router.delete('/delete',deleteFunc)
module.exports = router;