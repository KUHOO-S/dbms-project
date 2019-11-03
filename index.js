var express= require('express');
var bodyParser=require('body-parser');
var app=express();
app.set('view engine','ejs');
var urlencoded=bodyParser.urlencoded({extended:false});

app.use('/assets',express.static('assets'));


 app.get('/home',function(req,res)
 {
     res.render('homepage');
 });

 app.get('/book',function(req,res)
 {
     res.render('bookingpage');
 });


app.listen(3000);
console.log("it is on");
