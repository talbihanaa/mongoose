

const user= require('../moduls/model');

const createUser = async(req,res)=>{
     let {name, email,password}=req.body;
     await user.insertMany(req.body)
     .then((doc)=>{
        res.status(200).json({msg: 'user created with sucess',doc})
        
     })
     .catch ((err)=>{
        res.status(500).json({msg:'server error',err})
        console.log(err);
        
     })
}

const fetchData = async(req, res)=>{
await user.find({})
.then((data)=>{
    res.status(200).json({msg:"list of user", data})
})
.catch((err)=>{
   res.status(500).json({msg:'server err', err})
})
}

module.exports = {createUser , fetchData}
