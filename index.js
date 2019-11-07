var express= require('express');
var bodyParser=require('body-parser');
var app=express();
var assert = require('assert');
var mongoose= require('mongoose');

app.set('view engine','ejs');
var urlencoded=bodyParser.urlencoded({extended:false});
var data=[];var cursor=[]; var resultArray=[]; var data2=[];
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


app.use('/assets',express.static('assets'));

app.get('/adminlogin',function(req,res)
{
    res.render('adminlogin');
});

app.get('/data',function(req,res)
{
    res.render('data');
});


 app.get('/home',function(req,res)
 {
     res.render('homepage');
 });


 app.get('/book',function(req,res)
 {
    res.render('bookingpage');

 });
 app.post('/adminlogin',urlencoded,function(req,res){
   console.log(req.body);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ProjectDB");
    dbo.collection("CustomerBookingDetails").find().toArray(function(err,
      result) {
      if (err) throw err;
      data.push(result);
      console.log(result);

     res.render('data',{data:result});
      db.close(); });;
      });console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
      console.log("data is"+data);



    });


  //res.render('data');

 //});
 app.get('/data',function(req,res){

    res.render('data');
  });


 app.post('/book',urlencoded,function(req,res)
 {  console.log(req.body);
     data=req.body;
     data=JSON.stringify(data);

     console.log(data);
     data=JSON.parse(data);

     MongoClient.connect(url, function(err, db) {
       if (err) throw err;
       var dbo = db.db("ProjectDB");
       var myobj = data;
       dbo.collection("CustomerBookingDetails").insertOne(myobj, function(err, res) {
         if (err) throw err;
         console.log("1 document inserted");
         db.close();

       });
     });
     res.render('booking-success',{data:req.body});

 });

app.listen(3000);
console.log("it is on");
