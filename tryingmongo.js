var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";




MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ProjectDB");
  var myobj = [{ "customer_id" : 77443, "name" : "Taylor", "mobile" : 7943226345, "email" : "taylor@gmail.com", "login_id" : 77548, "hotel_id" : 65746 },
  { "customer_id" : 58343, "name" : "Joe", "mobile" : 6743212365, "email" : "joe@gmail.com", "login_id" : 78352, "hotel_id" : 23456 },
  { "customer_id" : 23212, "name" : "Billie", "mobile" : 3456278654, "email" : "be@gmail.com", "login_id" : 22872, "hotel_id" : 78901 },
  { "customer_id" : 33243, "name" : "Sophie", "mobile" : 6743897542, "email" : "sophiee@red.com", "login_id" : 85621, "hotel_id" : 26267 },
  { "customer_id" : 21897, "name" : "Mathew", "mobile" : 2376812986, "email" : "mp@gmail.com", "login_id" : 34783, "hotel_id" : 45678 },
  { "customer_id" : 65843, "name" : "Ross", "mobile" : 7654897543, "email" : "pivot@gmail.com", "login_id" : 32156, "hotel_id" : 26267 },
  { "customer_id" : 34674, "name" : "Tedd", "mobile" : 6574842921, "email" : "himym@gmail.com", "login_id" : 22887, "hotel_id" : 78901 }
  ];
  dbo.collection("Customer").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
