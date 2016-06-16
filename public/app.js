var express = require('express');
var js = require('jsonfile');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var fs = require('fs');
app.listen(8102, function(){
  console.log('server run');
});

app.use(express.static('First\ Page/'));

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});

app.get('/main', function(req, res){
  res.sendFile(__dirname+'/main/lobby.html');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

var stream = fs.createWriteStream("name.txt");
app.post('/ask', function(req,res){
  var id = req.body.ID;
  var data = {};
  data[id] = "0";
  var jsonfile = fs.readFileSync('name.json');
  var config = JSON.parse(jsonfile);
  config.push(data);
  var configJSON = JSON.stringify(config);
  fs.writeFileSync('name.json', configJSON);
  res.redirect("http://luffy.ee.ncku.edu.tw:8107/main");
});



