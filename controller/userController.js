const User = require("../models/userModel");

exports.newUser = async (req, res) => {
  const { email, password } = req.body;
  await User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "password didnt match" });
      }
    } else {
      res.send({ message: "user not registered" });
    }
  });
};

exports.getUser = async (req, res) => {
  // const { title , description, status}=req.body;
  try {
    const registered = await User.find();
    res.json(registered);
  } catch (error) {
    console.log("users ---->", resgistered);
  }
};
//   exports.  registerUser = async(req, res) => {
//     const {phone, isUser ,username , email, password}=req.body;
//  await User.findOne({email: email}, (err, user)=>{
//      if(user){
//        res.send({message:"user already registered"})
//      }else{
//        const user = new User({
//          isUser,
//          username,
//          email,
//          phone,
//          password
//       })
//       user.save(err =>{
//         if(err) {
//           res.send(err)
//         }else{
//           res.send({ message:"Successfully Registered" })
//         }

//       })
//      }
//    })

//    };

exports.registerUser = async (req, res) => {
  // const { phone, isUser, username, email, password } = req.body;

  let find1 = await User.findOne({email:req.body.email})
    
  

  const user = new User({
    isUser:req.body.isUser,
    username:req.body.username,
    email:req.body.email,
    phone:req.body.phone,
    password:req.body.password,
  });
  if(find1){
  
    res.send({message:"user already registered"})
  }
  else{
    let a1 = await user.save()
    res.send({ message:"Successfully Registered" })
  }
  
  
  }

