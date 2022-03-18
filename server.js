var express = require('express');
var app = express();

app.set('port', 8080)
app.get('/', (req, res) => {
    res.send('localhost:8080에서 뜹니다.')
})
app.listen(app.get('port'), () => {
    console.log('실행되면 노드 연결 성공')
})