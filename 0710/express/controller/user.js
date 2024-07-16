const userModel = require('../model/user')
const main = (req, res) => {
    res.render('index', { users: userModel });
}



const register = (req, res) => {
    console.log(req.body)
    const { name, gender, major } = req.body;
    // 객체 구조 분해 할당
    userModel.push({
        id: userModel.length + 1,
        name,
        gender,
        major,
    });
    res.json({ result: true })
}
module.exports = { main, register };

// exports.main = (req, res) => {
//     res.render('index');
// } 이렇게 써도 됩니다.
