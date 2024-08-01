const { response, query } = require('express');
const userModel = require('../model/user')
exports.main = (req, res) => {
    res.render('index');
}

exports.resultGet = (req, res) => {
    console.log('로그인 요청', req.query);
    const request = {
        response: query,
    };
    res.js
}