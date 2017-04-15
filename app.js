var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + '/public'));  
app.use(express.static(__dirname + '/public')); 

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.get('/api/get', function (req, res) {
    res.json({ data: 'GET: Hello world', success: true });
});

app.post('/api/post', function(req, res) {   
    res.json({ data: 'POST: Hello', success: true });
});

app.listen(8080, function() {
    console.log('Server on port ' + 8080);
});
