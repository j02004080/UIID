var express = require('express');

var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var fs = require('fs');

app.listen(8107, function(){
  console.log('server run');
});

app.use(express.static('First\ Page/'));

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

app.post('/ask', function(req,res){
  var id = req.body.ID;
  //var content = fs.readFileSync('name.json');
  //var obj = JSON.parse(content);
  res.send(id);
});



