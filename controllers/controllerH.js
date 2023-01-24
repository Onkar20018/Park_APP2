const { default: mongoose } = require("mongoose")
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Onkar18:Onkar@cluster0.omcwrve.mongodb.net/ParkApp";


exports.ParkData= async (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ParkApp");
        var data;
        dbo.collection("CarInfo").findOne({}, function(err, result) {
          if (err) {
         return res.send(442).json({ status: "fail", message: "got nothing" })
          }
          console.log(result);
          data = result
          db.close();
          res.status(200).send(data)
        });
      });
}