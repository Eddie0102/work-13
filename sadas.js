const express = require('express');
const crypto = require('crypto');
const app = express();
const PORT = 8000;

app.use(express.json());

let sign = ''; //전역변수로 패쓰워드를 저장(db에 저장된 값이라고 가정함)
//라우터
app.post('/sign', (req, res) => {
    const { pw } = req.body;
    //const sign = createHashedPassword(pw); 해시
    sign = createPdkdf(pw);
    res.json({ result: sign });
});
app.post('/verify', (req, res) => {
    const { pw } = req.body;
    const result = verifyPassword(pw, sign);
    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

//단방향
//해시함수
const createHashedPassword = (password) => {
    //createHash(알고리즘).update(암호화할값).digest(인코딩방식)
    return crypto.createHash('sha256').update(password).digest('base64');
};
//pdkdf2함수
const salt = crypto.randomBytes(16).toString('base64'); //솔트생성
const iterations = 1000; //반복횟수
const keylen = 64; //생성할 키의 길이
const digest = 'sha256'; //알고리즘

//암호화생성
const createPdkdf = (password) => {
    console.log(salt);
    //pdkdf2함수(비밀번호, 솔트, 반복횟수, 키의길이, 알고리즘)으로 생성. 반환buffer값
    const sign = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
    console.log(sign);
    return sign.toString('base64');
};
//암호비교
const verifyPassword = (password, dbPassword) => {
    const compare = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('base64');
    if (compare === dbPassword) {
        return true;
    } else {
        return false;
    }
};