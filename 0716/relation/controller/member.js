const { Member, Profile } = require('../models')

// 회원가입----------2
exports.signup = async (req, res) => {
    try {
        const { userId, password, userName, age, email } = req.body;
        const find = await Member.findOne({ where: { userId } });
        console.log('find', find)
        if (find) {
            res.json({ result: false, message: '이미 존재하는 회원' })
        } else {
            const result = await Member.create({ userId, password })
            console.log('signup', result)
            await Profile.create({ userName, age, email, memberId: result.id })
            res.json({ result: true });
        }
    } catch (error) {
        res.status(500).json({ result: false, message: '서버오류' });
    }
}
// ----------2

exports.login = async (req, res) => {

    try {
        const { userId, password } = req.body;
        const find = await Member.findOne({ where: { userId } });
        console.log('find', find);
        if (find) {
            if (find.password === password) {
                const response = {
                    id: find.id,
                    userId: find.userId,
                };
                res.json({ rsult: true, code: 100, response, message: '로그인성공' });
            } else {
                res.json({ rsult: false, code: 1000, response: null, message: '비밀번호가 틀렸습니다' })
            }
        } else {
            res.json({ result: false, code: 1001, response: null, message: '아이디가 틀렸습니다.' })
        }
    } catch (error) {
        res.status(500).json({ result: false, message: '서버오류' });
    }
}

exports.find = async (req, res) => {

    try {
        const { id } = req.params;
        const result = await Member.findByPk(id, {
            attributes: ['userId'],
            // include: 쿼리를 실행할때 관련된 모델의 데이터도 함께 조회할 수 있도록하는 옵션
            include: [{ model: Profile, attributes: ['userName', 'age', 'email'] }],
        });
        console.log('find', result);
        res.json({ result: true, response: result });
    } catch (error) {
        res.status(500).json({ result: false, message: '서버오류' });
    }
}