var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var multer = require('multer');
var port = 3000;

app.get('/',function(req, res){
  res.send('hello world')
})


app.listen(port, function(){
  console.log('listening in port ', port)
})
