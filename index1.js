var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');
var url = 'mongodb://localhost:27017/ProjectDB';

/* GET home page. */
router.get('/',function(req,res,next){
    res.render('index1');
});

router.get('/get-data',function(req,res,next){
    var resultArray = [];
    mongo.connect(url,function(err,db){
    assert.equal(null,err);
    var cursor =db.collection('Customer').find();
    cursor.forEach(function(doc,err){
        assert.equal(null,err);
        resultArray.push(doc);

    },function()
    {
        db.close();
        res.render('index1',{items:resultArray});

    }
    });        
    });
});
});

router.post('/insert',function(req,res,next){
    var item= {
        username: req.signup.username,
        email: req.signup.email,
        mobile: req.signup.mobile
    };

    

    mongo.connect(url,function(err,db){
        assert.equal(bull,err);
        db.collection('Customer').insertOne(item,function(err,result){
            console.log('Item inserted');       
          db.close();
        });
    });

    res.redirect('/');
});

router.post('/update',function(req,res,next){

});

router.post('/delete',function(req,res,next){

});

module.exports = router;