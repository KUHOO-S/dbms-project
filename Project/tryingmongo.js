var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



/*
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Projectdb");
    dbo.createCollection("Hotel", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  })
*/
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Projectdb");
  var myobj = [
    { "hotel_id" : 12345, "description" : "Scenic views with tour guides", "location" : "Beverly hills,USA" },
{ "hotel_id" : 23456, "description" : "With spas and resorts and picturesque beauty", "location" : "Santorini,Greece" },
{ "hotel_id" : 45678, "description" : "Destination Wedding planners just for you", "location" : "Bora Bora" },
{ "hotel_id" : 78901, "description" : "On the summit of the mountain", "location" : "Alps" },
{ "hotel_id" : 76543, "description" : "On the sea shores", "location" : "California" },
{ "hotel_id" : 26267, "description" : "Pictureque Beauty", "location" : "Bali,Indonesia" },
{ "hotel_id" : 65746, "description" : "Indulge in rich cultures", "location" : "Beijing" }
  ];
  dbo.collection("Hotel").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
