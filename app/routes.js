var cust = require('./model/customer');
var adm = require('./model/admin');
var loc = require('./model/location');
module.exports = function(app) {

    app.get('/api/customers', function(req, res) {
      cust.find({},function(err,cust){
        if(err){
          res.send(err);
        }
        else{
            res.send(cust);
        }
      });
    });
    app.get('/error',function(req,res){
      res.sendfile('./public/error.html');
    });
    app.get('/api/admin/:username/:password', function(req, res) {
      adm.find({username:req.params.username,password:req.params.password},function(err,adm){
        if(err){
          res.send(err);
        }
        else{
            res.send(adm);
        }
      });
    });
    app.post('/api/location', function(req, res) {
      console.log("hello");
      console.log(req);
      loc.insertMany([req.body],function(error, docs) {});

      res.send("SUCCESS");
    });

    app.post('/api/customer',function(req,res){
      console.log("hello");
      console.log(req);
      cust.insertMany([req.body],function(error, docs) {});

      res.send("SUCCESS");
    });
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};
