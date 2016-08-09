var express = require("express");
var multer  = require('multer');
var app = express();
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});
var upload = multer({ storage : storage}).single('fileExamine');
var port = process.env.PORT || 8000

app.get('/',function(req,res){
      res.sendFile(__dirname + "/views/index.html");
});

app.post('/api/filemeta',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        console.log(req.file)
        res.json({size: req.file.size});
    });
});

app.listen(port,function(){
    console.log("Working on port 3000");
});
