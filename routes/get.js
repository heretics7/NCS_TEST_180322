var express = require('express');
var getRouter = express.Router();

getRouter.get('/', (req, res) => {
    res.send('localhost:8080/get 연결 성공')
})

module.exports = getRouter;