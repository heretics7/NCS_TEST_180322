var express = require('express');
var postrouter = express.Router();

postrouter.post('/', (req, res) => {
    res.send({
        'fun':'함수형 post 연결 성공',
        'cla':'클래스형 post 연결 성공'
    });
})

module.exports = postrouter;