var MongoClient = require('mongodb').MongoClient;var data=[];
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("kuhoodb");
dbo.collection("table1").find().toArray(function(err,
result) {
if (err) throw err;
data.push(result);
console.log(result);
db.close(); });});
console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
console.log("data is"+data);

