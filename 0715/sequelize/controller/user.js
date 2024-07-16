const { User } = require('../models');

//회원가입
const signup = async (req, res) => {
    console.log('요청값:', req.body);
    const { userId, userName, userPw } = req.body;
    //const result = await userModel.signup(userId, userName, userPw);
    const result = await User.create({ userId, userName, userPw });
    res.json({ result: true });
};
//로그인
const login = async (req, res) => {
    console.log('요청값:', req.body);
    const { userId, userPw } = req.body;
    //const result = await userModel.login(userId, userPw);
    const result = await User.findOne({ where: { userId, userPw } });
    console.log('login', result);
    if (result !== null) {
        res.json({ result: true, message: '로그인 성공', id: result.id });
    } else {
        res.json({ result: false, message: '로그인 실패', id: null });
    }
};
//회원정보 한명 조회
const info = async (req, res) => {
    console.log('요청값', req.params.id);
    //const result = await userModel.info(req.params.id);
    const result = await User.findOne({ where: { id: req.params.id } });
    // findOne 대신 findByPk로 Primary Key로 검색할 때 사용가능
    if (result !== null) {
        res.json({ result: true, info: result, message: '조회완료' });
    } else {
        res.json({ result: false, info: null, message: '존재하는 회원없음' });
    }
};
//회원정보 수정
const update = async (req, res) => {
    console.log('요청값', req.body);
    const { id, userName, userPw } = req.body;
    //const result = await userModel.update(id, userName, userPw);
    const result = await User.update({ userName, userPw }, { where: { id } });
    res.json({ result: true });
};
//회원정보 삭제
const deleteFunc = async (req, res) => {
    console.log('요청값', req.body);
    //const result = await userModel.deleteFunc(req.body.id);
    const result = await User.destroy({ where: { id: req.body.id } });
    res.json({ result: true });
};
//회원 전체 정보
const all = async (req, res) => {
    //const result = await userModel.all();
    const result = await User.findAll({
        //attributes:원하는 컬럼 조회(배열형태)
        attributes: ['id', 'userName', 'userId'],
    });
    console.log(result);
    res.json({ result });
};




module.exports = { all, signup, login, info, update, deleteFunc }