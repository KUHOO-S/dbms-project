const mongo=require('mongodb');
const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017';
var dbfiles;
MongoClient.connect(url, { useNewUrlParser: true },{useUnifiedTopology: true}, (err, client) => {

    if (err) throw err;

    const db = client.db("Hotel_Management");

    db.collection('aleya').find({}).toArray().then((docs) => {

        console.log(docs);
        console.log("kookoko");
        dbfiles=docs;
    }).catch((err) => {

        console.log(err);
    }).finally(() => {

        console.log(dbfiles);
        console.log("h")

        client.close();
    });
});

