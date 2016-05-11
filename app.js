var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var fs = require('fs');

app.listen(8108, function(){
  console.log('server run');
});

app.use(express.static('public/'));
app.get('/' ,function(req, res){
  res.redirect('/First Page');
});
app.get('/First Page',function(req,res){
  res.sendFile('index.html');
});
app.get('/GamePage', function(req, res){
  res.sendFile('/GamePage/GamePage.html');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));


