var express = require('express');
var postrouter = express.Router();

postrouter.post('/', (req, res) => {
    res.send({
        'fun':'function post 연결 성공',
        'cla':'class post 연결 성공'
    });
})

module.exports = postrouter;