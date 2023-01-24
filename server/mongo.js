const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const DB = "mongodb+srv://Onkar18:Onkar@cluster0.omcwrve.mongodb.net/ParkApp"
mongoose.connect(DB, {
     useNewUrlParser: true,
      useUnifiedTopology: true 
    }).then(() => {
                  console.log("Connected") 
                  }).catch((err) => {
                  console.log(err)
                    })

