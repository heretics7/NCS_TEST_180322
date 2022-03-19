var express = require('express');
var app = express();
var getrouter = require('./routes/get');
var postrouter = require('./routes/post');


app.set('port', 8080)
app.get('/', (req, res) => {
    res.send('localhost:8080 연결 성공')
})

app.use('/get', getrouter)
app.use('/post', postrouter)

app.listen(app.get('port'), () => {
    console.log('실행되면 노드 연결 성공')
})