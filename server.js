var express=require('express');
var bdy=require('body-parser');
var mongoose= require('mongoose');
var app=express();
var db = require('./config/db');
var port = process.env.PORT || 3000;
mongoose.connect(db.url,{
  server:{
    socketOptions:{
      keepAlive:1
    }
  }
});
app.use(bdy.json());
app.use(express.static(__dirname + '/public'));
require('./app/routes')(app);
var server=app.listen(port);
console.log(db.url);
exports = module.exports = app;
