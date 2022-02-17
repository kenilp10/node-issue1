
const mongoose = require("mongoose") ;



const userSchema = new mongoose.Schema({
   
    isUser:  { type:String,
        require:true,
  },
    username:  { type:String,
    require:true,
  },
     phone:  { type: Number,
               require:true,
  },
     email:  { type:String,
      require:true,
  },
     password: { type:String,
      require:true,
  }
  });

  module.exports = mongoose.model("User", userSchema);