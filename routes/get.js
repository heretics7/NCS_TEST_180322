var express = require('express');
var getrouter = express.Router();
var mysql = require('mysql');
var awsconfig = require('../db/awsconfig.js')
var connect = mysql.createConnection(awsconfig);

getrouter.get('/', (req, res) => {
    res.send('localhost:8080/get 라우터 연결 성공')
})
getrouter.get('/suppose', (req, res) => {
    connect.query('SELECT * FROM suppose', (error, data) => {
        if(error) throw error;
            console.log('react_suppose 스키마 suppose 테이블 내 데이터', data)
            res.send(data)
        }
    )
})

module.exports = getrouter;