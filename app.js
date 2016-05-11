var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var fs = require('fs');

app.listen(8107, function(){
  console.log('server run');
});

app.use(express.static('public/'));
app.get('/Home',function(req,res){
  res.sendFile(path.join(__dirname+ '/index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));


