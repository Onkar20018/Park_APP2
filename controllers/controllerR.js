const User = require("../server/schema")
const jwt = require('jsonwebtoken')
exports.CreateUser = async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body

    console.log("IN Controller");
  // if (!name || !email || !phone || !password || !cpassword) {
  //   return res.status(442).json({ "status": "fail", message: "Fill All the Fieleds" })
  // }
      if(!name){
        return res.status(442).json({"status":"fail",message:"No Name"})
      }
      if(!email){
        return res.status(442).json({"status":"fail",message:"No Email"})
      }
      if(!phone){
        return res.status(442).json({"status":"fail",message:"No NoPhone"})
      }
      if(!password){
        return res.status(442).json({"status":"fail",message:"No Password"})
      }
      if(!cpassword){
        return res.status(442).json({"status":"fail",message:"No CPassword"})
      }


  var bools = await User.doesEmailExist(email)
  if (!bools) {
    console.log("Email Exist Not Posted");
    return res.status(442).json({ status: "fail", message: "Email Already Exists" })
  }
  if (password != cpassword) {
    console.log("Pass Does not Match Not Posted");
    return res.status(442).json({ status: "fail", message: "Password and Confirmed Password are not matching" })
  }

  const user = await User({ name, email, phone, password })

  await user.save();
  console.log("Saved")
  res.json(user);
}
//////////////////////////////////////////////

