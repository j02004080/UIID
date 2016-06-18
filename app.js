var express = require('express');
var js = require('jsonfile');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var credentials = require('./credential.js');
var exec = require("child_process").exec;
var app = express();
var fs = require('fs');
app.listen(8104, function(){
  console.log('server run');
});

app.use(express.static('public/'));
app.use(cookieParser(credentials.cookieSecret));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

app.get('/', function(req, res){
  res.redirect('/First Page');
});

app.get('/lobby', function(req, res){
  res.sendFile(__dirname+ '/public/lobby/lobby.html');
});

app.post('/dialog', function(req, res){
  var id = req.body.call;
  var actions = req.body.actions;
  var argv = "php dialog.php " + id + " " + actions;
  exec(argv, function(error, stdout, stderr){
    res.send(stdout);
  });
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
app.get('/continue', function(req, res){
  res.redirect('/main');
});
app.get('/First Page',function(req,res){
  res.sendFile(__dirname+'/public/First Page/index.html');
});

app.get('/main', function(req, res){
  res.sendFile(__dirname+'/public/main/main.html');
});


function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}


app.get('/ask', function(req,res){
  var i;
  var id = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
  var jsonfile = fs.readFileSync('name.json');
  var config = JSON.parse(jsonfile);
  console.log(id); 
  res.cookie('player', id, {signed:true});
  res.redirect('/main');
});

app.post('/getdata', function(req, res){
  var playerN;
  playerN = req.signedCookies.player;
  var i;
  var jsonfile = fs.readFileSync('name.json');
  var config = JSON.parse(jsonfile);
  
  if(playerN){
    
    for(i = 0; i < config.length; i++){
      if(config[i].name == playerN){
        data = config[i];
      } 
    }
    console.log(data.name);
  }
});



app.post('/leave', function(req, res){
  var id = req.signedCookies.player;
  var jsonfile = fs.readFileSync('name.json');
  var config = JSON.parse(jsonfile);
  var data = {
              name:id,
              conversation:"0",
              str:0,
              map:0
            };
  console.log('bye');
  config.push(data);
  var configJSON = JSON.stringify(config);
  fs.writeFileSync('name.json', configJSON);
});


