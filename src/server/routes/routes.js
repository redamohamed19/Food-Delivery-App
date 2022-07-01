const express = require('express');
const Model = require('../models/model');

const router = express.Router()

module.exports = router;
const bcrypt=require("bcrypt")

//Post Method

router.post('/post', async (req, res) => {
    const hash = bcrypt.hashSync(req.body.Password, 10);
  
    const data = new Model({
        FirstName: req.body.FirstName,
        SecondName: req.body.SecondName,
        Email: req.body.Email,
        PhoneNumber: req.body.PhoneNumber,
        Password: hash
    })


    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})


//Get all Method
router.get('/getuser', async (req, res) => {


    try{
        const user=await Model.findOne({Email:req.body.Email}).exec();
        if(!user){ 
            res.json({response:"Email or Password Incorrect"})
        }
        bcrypt.compare(req.body.Password,user.Password).then((match)=>{
            console.log(match)
            if(!match){
                res.status(400).json({response:"Email or Password Incorrect"})
            }
            res.json("Logged In")
        })
       
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
