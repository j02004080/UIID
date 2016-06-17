var express = require('express');
var js = require('jsonfile');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var credentials = require('./credential.js');
var app = express();
var fs = require('fs');
app.listen(8103, function(){
  console.log('server run');
});

app.use(express.static('public/'));
app.use(cookieParser(credentials.cookieSecret));

app.get('/', function(req, res){
  res.redirect('/First Page');
});

app.get('/test', function(req, res){
  if(!res.locals.partials){
    res.locals.partials = {};
  }
  var monsterCookie = req.signedCookies.signed_monster;
  //res.cookie('monster', 'nom nom');
  //res.cookie('signed_monster', 'nom nom', {signed:true});
  if(!req.signedCookies.signed_test){
    res.send('false');
  }
  else{
  res.send(monsterCookie);
  }
  //res.send('hi');
});

app.get('/First Page',function(req,res){
  res.sendFile(__dirname+'/public/First Page/index.html');
});

app.get('/main', function(req, res){
  res.sendFile(__dirname+'/public/main/main.html');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));


app.post('/ask', function(req,res){
  var id = req.body.ID;
  var i;
  var jsonfile = fs.readFileSync('name.json');
  var config = JSON.parse(jsonfile);
  for(i = 0; i < config.length; i++){
    if(config[i].name == id){
        data = config[i];
        console.log(data.name);
      }
  }

  config.push(data);
  var configJSON = JSON.stringify(config);
  fs.writeFileSync('name.json', configJSON);
  res.redirect("/main");
});

app.post('/leave', function(req, res){
  
  var jsonfile = fs.readFileSync('name.json');
  var config = JSON.parse(jsonfile);
  var data = {
              name:id,
              conversation:"0",
              str:0,
              map:0
            };

  config.push(data);
  var configJSON = JSON.stringify(config);
  fs.writeFileSync('name.json', configJSON);
});


