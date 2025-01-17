const { Post, Comment } = require('../models');

//게시판 글 생성
exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const result = await Post.create({ title, content });
        res.json({ result: true, response: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
};
//댓글 생성
exports.createComment = async (req, res) => {
    try {
        const { postId, comment } = req.body;
        const result = await Comment.create({ postId, comment });
        res.json({ result: true, response: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
};
//전체조회
exports.all = async (req, res) => {
    try {
        const result = await Post.findAll({
            attributes: ['title', 'id'],
        });
        res.json({ result: true, response: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
};
//하나조회
exports.getPost = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Post.findByPk(id, {
            attributes: ['title', 'content'],
            include: [{ model: Comment }],
        });
        res.json({ result: true, response: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
};

exports.update = async (req, res) => {
    try {
        const {id} =req.body
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
}