const mongo= require('mongodb');
const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017';
var dbfiles;
 
MongoClient.connect(url, { useNewUrlParser: true },{useUnifiedTopology: true}, (err, client) => {

    if (err) throw err;

    const db = client.db("ProjectDB");
    async function AddOne()
{ 

    await db.collection('Customer').insertOne({

        "customer_id":32345,
        "name":"TKuhoo",
        "mobile":7943237972,
        "email":"tkuhr@gmail.com",
        "login_id":72148,
        "hotel_id":32316
    });
    console.log("lets hope its odne");
}});
