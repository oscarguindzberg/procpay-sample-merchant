var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
var fs = require('fs');


app.use(express.static('public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.get('/callback', function (req, res) {
  console.log("invoked /callback");
  console.log("order_id : " + req.query.order_id);
  console.log("amount : " + req.query.amount);
  console.log("amount_in_proc : " + req.query.amount_in_proc);
  console.log("amount_paid_in_proc : " + req.query.amount_paid_in_proc);
  console.log("status : " + req.query.status);
  console.log("address : " + req.query.address);
  console.log("tid : " + req.query.tid);
  console.log("transaction_ids : " + req.query.transaction_ids);
  console.log("keychain_id : " + req.query.keychain_id);
  console.log("last_keychain_id : " + req.query.last_keychain_id);
  console.log("after_payment_redirect_to : " + req.query.after_payment_redirect_to);
  console.log("callback_data : " + req.query.callback_data);
  console.log("");
  return res.status(200).send("ok");  
});

app.listen(3000, function () {
  console.log('propay merchant ' + 3000);
});