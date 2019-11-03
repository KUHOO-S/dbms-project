var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/GravitasDB";

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var Hdb = db.db("Hotel Management");
        data=Hdb.collection("aleya").find();
        console.log(data);
        console.log("hit");
    });
