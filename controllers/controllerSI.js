const User = require("../server/schema")
const bcrypt = require('bcrypt')
exports.SignIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(442).json({ status: "fail", message: "Please Fill Data" })
  }


  const userExistance = await User.findOne({ email: email })
  //        console.log(userExistance.email);

  if (userExistance) {
    const compareP = userExistance.password;
    //  console.log(compareP);
    if (await bcrypt.compare(password, compareP)) {
      res.status(200).json({ status: "success", message: "User Authenticated" })
    } else {
      // console.log("OH YA");
      res.status(442).json({ status: "fail", message: "Invalid Password" })
    }
  }
  else {
    console.log("Email Not Verified");
    return res.status(442).json({ status: "fail", message: "Email Not Verified" })
  }
}
