const exrpess = require('express');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const app = exrpess();
const PORT = 8000;

app.use(exrpess.json());


let sign = '' //전역변수로 설정


// 라우터
app.post('/sign', (req, res) => {
    const { pw } = req.body;
    // const sign = createHashedPassword(String(pw)) //해시
    sign = createPdkdf(pw)
    // sign = bcryptPaasword(pw);
    // sign=cipherEncrypt(pw)
    res.json({ result: sign });
})

app.post('/verify', (req, res) => {
    const { pw } = req.body;
    const result = verifyPassword(pw, sign)
    // const result = comparePassword(pw, sign)
    // const result = decipher(sign)
    res.json({ result })
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})


// 단방향
// 해시함수
const createHashedPassword = (password) => {
    // createHash(알고리즘).update(암호화할 값).digest(인코딩 방식)
    return crypto.createHash('sha256').update(password).digest('base64')
}

// pdkdf2함수
const salt = crypto.randomBytes(16).toString('base64'); //솔트 생성
const iterations = 1000; //반복횟수
const keylen = 64; //생성할 키의 길이
const digest = 'sha256'; //알고리즘

// 암호화 생성
const createPdkdf = (password) => {
    console.log(salt)
    // pdkdf2함수(비밀번호, 솔트, 반복횟수, 키의길이, 알고리즘 )으로 생성. 반환 buffer값
    const sign = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest)
    console.log(sign)
    return sign.toString('base64');
};

// 암호비교
const verifyPassword = (password, dbPassword) => {
    const compare = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('base64'); //pdkdf뒤에sync로 동기, 비동기
    if (compare === dbPassword) {
        return true;
    } else {
        return false;
    }
};

// bcrypt
const saltNumber = 10;
// 암호화
const bcryptPaasword = (password) => {
    return bcrypt.hashSync(password, saltNumber);
};
// 비교
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
}
// 양방향
const algorithem = 'aes-256-cbc' //256 비트 키를 사용, 블록크기 128비트
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// 암호화
const cipherEncrypt = (word) => {
    const cipher = crypto.createCipheriv(algorithem, key, iv)
    let encryptedData = cipher.update(word, 'utf-8', 'base64');
    EncryptedData = cipher.final('base64');
    return encryptedData
}

// 복호화
const decipher = (data) => {
    const decipher = crypto.createDecipheriv(algorithem, key, iv)
    let decryptedData = decipher.update(data, 'utf-8', 'base64');
    decryptedData += decipher.final('base64');
    return decryptedData
}
