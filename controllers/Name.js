const User = require("../server/schema")
const bcrypt = require('bcrypt')
exports.Nameget = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(442).json({ status: "fail", message: "Please Fill Data" })
  }


  const userExistance = await User.findOne({ email: email })
  //        console.log(userExistance.email);

  if (userExistance) {
    const name = userExistance.name;
    res.send(name)
  }
  else {
    console.log("Email Not Verified");
    return res.status(442).json({ status: "fail", message: "Email Not Verified" })
  }
}
