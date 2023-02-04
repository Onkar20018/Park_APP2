
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Onkar18:Onkar@cluster0.omcwrve.mongodb.net/ParkApp";


exports.Name= async (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var ParkApp = db.db("ParkApp");
        var data;
          console.log("data");
        ParkApp.collection("personaldatas").findOne({},{projection: {_id: 0}}, function(err, result) {
          if (err) {
            console.log("Data");
         return res.send(442).json({ status: "fail", message: "got nothing" })
          }
          data = result
          db.close();
          res.send(data)
        });
      });
}
