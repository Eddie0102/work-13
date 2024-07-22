const { User } = require("../models");

//회원가입
const signup = async (req, res) => {
    console.log("요청값:", req.body);
    const { userId, userName, userPw } = req.body;
    console.log('userId:',userId)
    const result = await User.create({ userId, userName, userPw });
    res.json({ result: true });
  };

module.exports = { signup };
