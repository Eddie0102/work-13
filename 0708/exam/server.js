const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

// view engine
app.set('view engine', 'ejs')

// 정적파일 세팅
app.use("/uploads", express.static(__dirname + '/uploads'));

const storage = multer.diskStorage({
    // 파일이 저장될 경로
    destination: (req, file, callback) => {
        // done 은 콜백함수
        callback(null, 'uploads/')
        // '/'가 앞에 붙으면 저장할 경로,뒤에붙으면 더 경로가 진행됨
    },
    // 파일이름 설정
    filename: (req, file, callback) => {
        // 확장자 추출
        // 예) 푸바오.jpg 에서 .jpg 만 추출
        const ext = path.extname(file.originalname)
        // 파일이름 추출
        // 예) 푸바오.jpg 에서 푸바오 만 추출
        const newName = path.basename(file.originalname, ext) + Date.now() + ext
        callback(null, newName);
    },
});
// 파일용량 제한

const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 5} });
// 키값과 밸류가 같으면 생략가능


// router
// ====페이지
app.get('/', (req, res) => {
    res.render('index');
})
//===요청, 응답 데이터
app.post('/uploads', upload.single('userfile'), (req, res) => {
    // 요청받은 데이터
    console.log('file', req.file);
    console.log('data', req.body);
    const {id, pw, username, age} = req.body
    // 응답 데이터
    res.json({filename: req.file.path,id,pw,username,age});
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})