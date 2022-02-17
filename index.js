const express = require( "express");
const cors = require("cors");
const mongoose = require("mongoose") ;
const bodyParser = require('body-parser');
const app = express();
const data = require("./routes/dataRoute")
const user =require("./routes/userRoute")
const dotenv = require("dotenv")
dotenv.config({path:"./config.env"})
const PORT = process.env.PORT || 8000;
const DB = process.env.DATABASE;

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true}));


app.use("/", user);
app.use("/", data);

app.use( express.static('uploads'));


app.get("/",(req,res) => {
  res.send("welcome to server")
})
app.listen(PORT, () => {
  console.log("started at port",PORT);
  
});



// mongoose.connect(
//   "mongodb+srv://test:kenil123@cluster0.letz6.mongodb.net/test?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
//   },
//     () => {
//       console.log("DB connected......");
//   }
// );

// mongoose.connect("mongodb+srv://test:kenil123@cluster0.letz6.mongodb.net/test?retryWrites=true&w=majority",() => ({
//   useNewUrlParser:true,
//   useFindAndModify:true
// })).then(() => console.log('DB Connected'))
// .catch((err)=>{
//   console.log('connection failed');
// });



mongoose.connect(DB, {
  
  
 
 
}).then(()=>{
 console.log("connected to database successfully")
}).catch((err)=>{
 console.log('connection failed');
 console.log(err)
});









