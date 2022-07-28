var express = require('express');
var app = express();


app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));


app.get('/',function(req,res){
    res.render('pages/index');
});

app.get('/roadmap',function(req,res){
    res.render('pages/roadmap');
});

Port=8080;
app.listen(Port);
console.log(`Server Is Running on ${Port}`);