const { where } = require('sequelize');
const { Post } = require('../models');
const { Op } = require('sequelize')

// 전체글 조희
const all = async (req, res) => {
    const result = await Post.findAll({
        attributes: ['id', 'title', 'content','createdAt'],
        // where: { id: { [Op.lte]: 4 } },
        // Op.lte(이하),Op.gte(이상),Op.gt(초과),Op.lt(미만)
        // Op.or(또는), Op.ne(같지않음), Op.in(배열요소중 하나), Op.notInn(베열 요소와 모두 다름)
        // where:{[Op.or]:[{id:4},{title:'수정하겠습니다'}]}
        where: { id: { [Op.gte]: 1 } },
        order: [['id','asc']],
        // limit: 2,
        // offset: 3,
    });
    console.log('all', result);
    res.json({ result: true, data: result });
}
const write = async (req, res) => {
    const { title, content } = req.body;
    const result = await Post.create({ title, content })
    // insert into posts { title, content } values { title, content }
    res.json({ result: true, data: result.id });
};
const one = async (req, res) => {
    console.log(req.params.id);
    const result = await Post.findOne({ where: { id: req.params.id } });
    console.log('one', result);
    res.json({ result: true, data: result });
}


const updateFunc = async (req, res) => {
    // req.body.id,req.body.title,req.body.content
    const { id, title, content } = req.body;
    // update는 ({수정할 값},{어떤것을})
    const result = await Post.update({ title, content }, { where: { id } })
    console.log('update', result);
    res.json({ result: true, data: result });
}
const deleteFunc = async (req, res) => {
    const result = await Post.destroy({ where: { id: req.body.id } })
    console.log('delete', result);
    res.json({ result: true });
}
module.exports = { all, write, one, updateFunc, deleteFunc };