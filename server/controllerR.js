const User = require("./schema")
const jwt = require('jsonwebtoken')
exports.CreateUser = async(req,res)=>{
       const {name,email,phone,password,cpassword}=  req.body 

   //  console.log("IN Controller");
     if(!name || !email || !phone || !password || !cpassword){
        return res.status(442).json({"status":"fail",message:"Fill All the Fieleds"})
     }
var bools = await  User.doesEmailExist(email)
if(!bools){
  console.log("Email Exist Not Posted");
    return res.status(442).json({status:"fail",message:"Email Already Exists"})
}
if(password!=cpassword){  
  console.log("Pass Does not Match Not Posted");
    return res.status(442).json({status:"fail",message:"password and confirm password do not match"})
}

const user = await User({name,email,phone,password})

await user.save();
console.log("Saved")
res.json(user);
}
//////////////////////////////////////////////

 