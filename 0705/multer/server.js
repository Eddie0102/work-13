const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

// view engine
app.set('view engine', 'ejs');

// 정적파일 설정
//http://localhost:8000/uploads/파일명 << 이렇게 설정 하는 법
app.use('/uploads', express.static(__dirname+'/uploads'))
// multer설정