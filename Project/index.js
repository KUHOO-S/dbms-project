var express= require('express');
var bodyParser=require('body-parser');
var app=express();
app.set('view engine','ejs');

var urlencoded=bodyParser.urlencoded({extended:false});
app.use('/assets',express.static('assets'));

 app.get('/contact',function(req,res)
 {  console.log(req.query);
     res.render('contact',{qs: req.query});
 });

 app.post('/contact',urlencoded,function(req,res)
 {  console.log(req.body);
     res.render('contact',{qs: req.query});
 });

app.get('/:nameji',function(req,res){
//res.sendFile(__dirname+'/hi.html');
var data={
    age:70,
    height:5,
}
res.render('index',{nameji:req.params.nameji,data:data});
});


app.listen(3000);
