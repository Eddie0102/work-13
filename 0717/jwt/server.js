const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;
app.use(express.json());

app.post('/login', (req, res) => {
    const { id } = req.body;
    // jwt토큰 생성
    const token = jwt.sign({ id }, 'jwt-secret');
    res.json({ result: true, token });
})
// 토큰 검증
app.post('/verify', (req, res) => {
    const headers = req.headers.authorization;
    console.log(headers);
    const [bearer, token] = headers.split(' ')
    console.log(bearer, ':', token)
    if (bearer === 'Bearer') {
        jwt.verify(token, 'jwt-secret', (err, decode) => {
            if (err) {
                return res.status(403).json({ result: false, message: '검증실패' })
            }
            res.json({ result: true, result: decode });
        })
    }
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});