const { response } = require("express");
const { User, Waiting } = require("../models");

// 고객 생성
exports.createUser = async (req, res) => {
  try {
    const { userName, userEmail } = req.body;
    console.log("안녕");
    const result = await User.create({ userName, userEmail });
    res.json({ result: true, response: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ result: false, message: "서버오류" });
  }
};
// 대기열 생성
exports.createWaiting = async (req, res) => {
  try {
    const { name, userStatus, start, end } = req.body;
    const result = await Waiting.create({ name, userStatus, start, end });

    res.json({ result: true, response: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ result: false, message: "서버오류" });
  }
};

exports.login = async (req, res) => {
  console.log("요청값:", req.body);
  const { userName, userEmail } = req.body;
  //const result = await userModel.login(userid, pw);
  const result = await User.findOne({ where: { userName, userEmail } });
  console.log("login", result);
  if (result !== null) {
    res.json({ result: true, message: "로그인 성공", name: result.userName });
  } else {
    res.json({ result: false, message: "로그인 실패", id: null });
  }
};
