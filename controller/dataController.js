const Data = require("../models/dataModel");
const fs = require("fs");

exports. createData = async(req, res) => {
    // const { title , describe, status,userId,userName,time,image}=req.body;
  
    const data = await new Data({
     title:req.body.title,
     describe:req.body.describe,
     status:req.body.status,
     userId:req.body.userId,
     time:req.body.time,
      image:req.file.path,
     userName:req.body.userName,
   })
    data.save(err =>{
      if(err) {
        res.send(err)
      }else{
        res.send({ message:"Successfully instered" })
      }
   
    })
  };
  
  
  exports.updateData = async (req,res) => {    
  
      let findImage = await Data.findById(req.params.id);
      if(findImage && findImage.image){ 
        const remove = fs.unlinkSync(findImage.image);
     if(remove){
      console.log("removed successfully", remove)
     }
     
        const data = await Data.findByIdAndUpdate(req.params.id,{
         $set:{
              title:req.body.title,
              describe:req.body.describe,
              status:req.body.status,
              time:req.body.time,
              image:req.file.path,
         }   
        },{new:true})
        res.send(data)
       
      
        }
  
    
  };


//   router.put('/stars/:id',uploadMulter,validation,  async(req,res) => {    
//     if(stars){
//         // res.status(2
  
  exports.deleteData =async (req, res) =>{
    
    try {
            let findImage = await Data.findById(req.params.id);
          if(findImage && findImage.image){
             const remove = fs.unlinkSync(findImage.image);
            if(remove){
                console.log("removed successfully", remove)

         }
      }
      const deleted = await Data.findByIdAndDelete({_id: req.params.id})
      res.json(deleted);
      
    } catch (error) {
      console.log("error")
    }
  }
  exports. getAllData =async (req, res) => {
   
    try {
      const alldata = await Data.find()
      res.json(alldata);
      
    } catch (error) {
      console.log("alldata ---->",alldata)    
    }
  
  };
  
  exports.getData =async (req, res) => {
    try {
      const alldata= await Data.findById(req.params.id)
      res.json(alldata);  
      
    } catch (error) {
      console.log("alldata ---->",alldata)
    }
  
  };

  