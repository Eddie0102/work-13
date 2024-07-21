// 컨트롤러는 일반적으로 라우터에서 요청을 받아 처리하고, 결과를 클라이언트에 응답하는 역할
const userModel = require("../model/user");

exports.signup = async (req, res) => {
  console.log("요청값", req.body);
  const { userid, name, pw } = req.body;
  // 객체 구조 분해 할당으로 body(요청값)에 담긴 데이터를 userid,name,pw에 할당
  const result = await userModel.signup(userid, name, pw);
  res.json({ result: true });
};
