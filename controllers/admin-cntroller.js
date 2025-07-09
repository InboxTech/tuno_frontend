const User = require("../models/user-model")
const Contact = require("../models/contact-model")

const getAllUsers = async (req,res)=>{
  try {

    const users = await  User.find({},{password:0})
    if(!users || users.lenth === 0) {
     return  res.status(404).json({msg:"user not found"})
    }
    return res.status(200).json(users)
    
  } catch (error) {
    console.log(error);
    
  }
}

// singal user data ===>

const getUserById = async (req,res)=>{
try {
  const id = req.params.id;
  const data  =await User.findOne({_id:id},{password:0})
  return res.status(200).json({data})
  
} catch (error) {
  console.log(error);
  next(error);
  
}
}


    
// user delete ===>

const deleteUserById = async (req,res)=>{
try {
  const id = req.params.id;
  await User.deleteOne({_id:id})
  return res.status(200).json({msg:"delete sucessfully"})
  
} catch (error) {
  console.log(error);
  next(error);
  
}
}

// singal user update ===>
const updateUserById = async (req,res) =>{
  try {
    const id = req.params.id;
    const updateUserData = req.body ;
    const updateData = await  User.updateOne({_id:id},{$set:updateUserData});
    return res.status(200).json(updateData)
  } catch (error) {
    console.log(error);
    next()
    
  }
}

// contact get ==>

  const getAllContact = async (req,res)=>{
  try {

    const contactUser = await  Contact.find()
    if(!contactUser || contactUser.lenth === 0) {
     return  res.status(404).json({msg:" not contact found"})
    }
    return res.status(200).json(contactUser)
    
  } catch (error) {
    console.log(error);
    
  }
}

// delete contact
const deleteContactById = async (req,res)=>{
try {
  const id = req.params.id;
  await Contact.deleteOne({_id:id})
  return res.status(200).json({msg:"delete contact sucessfully"})
  
} catch (error) {
  console.log(error);
  next(error);
  
}
}

module.exports={getAllUsers,getAllContact,deleteUserById,getUserById,updateUserById,deleteContactById};
