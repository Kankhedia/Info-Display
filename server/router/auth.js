const express = require('express');
const jwt = require ('jsonwebtoken');
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const router = express.Router();
const authenticate = require('../middleware/authenticate')

router.get("/",(req,res)=>{
    res.send("Hello from router  ");
});

//registration 

router.post('/register',async (req,res)=>{
    const {name,email,number,work,pass,cpass} = req.body;

    if(!name || !email || !number || !work|| !pass|| !cpass){
        return res.status(422).json({error : "All fields are compulsory"});
    }
    
    try {
        const userExist = await User.findOne({email : email });

        if(userExist){
            return res.status(422).json({message : "User Exist"});
        }
        else if (pass != cpass){
            return res.status(422).json({error : "Password does not match "});
        }
        else{
            const user = new User ({name,email,number,work,pass,cpass});
        await user.save();

        res.status(201).json({message : "Registration Successful"});

        }

        
        
        
    } catch (error) {
        console.log(error);
    }

});

//login 

router.post('/login', async (req,res) => {
    try {
        let token;
        const {email,pass}=req.body;
        if(!email || !pass){
            res.status(400).json({error:"Pls fill the data "});
        }

        const userLogin = await User.findOne({email:email});
        
        
        if(userLogin){
            const isMatch= await bcrypt.compare(pass,userLogin.pass);
            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtcookie",token,{
                expires:new Date(Date.now() + 2589200000),
                httpOnly:true
            });
            

            if(!isMatch){
                 res.status(400).json({message:"Invalid Credientials pass"});

            }
            else{
                res.json({message :"Login Successful "});
            }
        }
      
        else{
            res.status(400).json({message:"Login Successful"});
        }
    } catch (error) {
        console.log(error);
    }
});

//About us

router.get('/about', authenticate ,(req,res)=>{
     res.send(req.rootUser);
  });

module.exports=router;