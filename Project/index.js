var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/GravitasDB";

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var Hdb = db.db("Hotel Management");
        //data=Hdb.collection("aleya").find().toArray();
        db.collection('aleya').find({}).toArray().then((docs) => {

            console.log(docs);

        }).catch((err) => {

            console.log(err);
        }).finally(() => {

            client.close();
        });
        //console.log(data);
        console.log("hit");
    });
