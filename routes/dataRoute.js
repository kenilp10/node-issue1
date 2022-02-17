const express = require("express");
const { createData, filterData,updateData, deleteData, getAllData, getData } = require("../controller/dataController");
const router = express.Router();


const multer= require("multer");
const path = require('path');
const storage= multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null , 'uploads/')
  },
  filename: (req, file , cb)=>{
    console.log(file);
    cb(null, "image" + Date.now() + path.extname(file.originalname) )
  }

})
const upload = multer({storage: storage})


router.route("/data").post(upload.single('image'),createData );

router.route('/data/:id').put(upload.single('image'),updateData);

router.route("/data/:id").delete(deleteData);

router.route("/data").get(getAllData);

router.route("/data/:id").get(getData);



module.exports =router;
