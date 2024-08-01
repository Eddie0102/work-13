
const express = require('express');
const { createPost, createComment, all, getPost } = require('../controller/post');
const router = express.Router();

//글생성
router.post('/create', createPost);
//댓글생성
router.post('/comment', createComment);
//전체조회
router.get('/all', all);
//하나조회
router.get('/getpost/:id', getPost);

module.exports = router;