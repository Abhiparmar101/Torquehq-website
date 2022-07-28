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

// Port=8181;
// app.listen(Port);
// console.log(`Server Is Running on ${Port}`);

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("server started successfully");
})
