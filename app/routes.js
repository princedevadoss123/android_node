var cust = require('./model/customer');
module.exports = function(app) {

    app.get('/api/customers', function(req, res) {
      cust.find(function(err,cust){
        if(err){
          res.send(err);
        }
        else{
            res.send(cust);
        }
      });
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
