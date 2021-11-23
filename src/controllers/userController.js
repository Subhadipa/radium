const userModel= require("../models/userModel.js")
const jwt=require('jsonwebtoken');

//1.
const createUser= async function (req, res) 
{
    var data= req.body
    let savedData= await userModel.create(data)
      res.send({msg: savedData})    
}

//2.
const loginUser= async function (req, res) 
{
  
    let userName= req.body.name;
    let psw=req.body.password;
   
    const userDetails=await userModel.findOne({name:userName,password:psw,isDeleted:false});
    
    if(userDetails)
    {
       token=jwt.sign({userId:userDetails._id},"Subha")//token generation
      res.header('x-auth-token',token)//add new header to my response
       res.send({status:true,data:userDetails,Token:token});
    }
    else
    {
      res.send({status:false,msg:"Invalid credentials!"});
    }
}

//3.
const getDataByToken = async function (req, res) 
{
  try
  {
  if(req.validToken1.userId==req.params.userId)//key name during token generation
 
    { 
          let userDetails = await userModel.findOne({_id: req.params.userId, isDeleted: false,});
          if(userDetails) 
          {
              res.status(200).send({status: true, data: userDetails})
          } 
          else 
          {
              res.status(404).send({status: false, message: 'User not found!'})
          }

      } 
      else 
      {
          res.status(403).send({status: false, message: 'Not authorized!'})
      }
    }
    catch(error)
    {
      res.status(500).send({status: false, msg: error.message});
    }
}
//4.
const updateUser = async function (req, res) 
{
  let userId= req.params.userId;
  let updatedEmail=req.body.email;
  
  try
  {
  if(req.validToken1.userId==req.params.userId)//key name during token generation
 
    { 
          let userDetails = await userModel.findOne({_id:userId, isDeleted: false,});
          if(userDetails) 
          {
            userUpdatedDetails= await userModel.findOneAndUpdate({_id:userId},{email:updatedEmail},{new:true});
              res.status(200).send({status: true, data:userUpdatedDetails})
          } 
          else 
          {
              res.status(404).send({status: false, message: 'User not found!'})
          }

      } 
      else 
      {
          res.status(403).send({status: false, message: 'Not authorized!'})
      }
    }
    catch(error)
    {
      res.status(500).send({status: false, msg: error.message});
    }
  
}
module.exports.createUser= createUser
module.exports.loginUser= loginUser
module.exports. getDataByToken= getDataByToken
module.exports.updateUser= updateUser

