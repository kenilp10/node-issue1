const mongoose = require("mongoose") ;


const dataSchema = new mongoose.Schema({
    userId : {
      type:String,
      require:true,
    },  
    userName:  { type:String,
    require:true,
  },
  image:  { type:String,
    require:true,
  },
    title:  { type:String,
      require:true,
  },
   describe:  { type:String,
    require:true,
      },
    
  
    status: { type:String,
      require:true,
  },
    time: { type:String,
    require:true,
  }
  });

  module.exports = mongoose.model("Data", dataSchema);