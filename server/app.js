const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require ('express');
const cookieParser = require ('cookie-parser');

const app = express();
app.use(cookieParser());

dotenv.config({path: './config.env'});
require('./db/conn');

app.use(express.json());


//const User = require('./models/userSchema');

const PORT = process.env.PORT;

//linking router file 
app.use(require('./router/auth'));



app.get("/",(req,res)=>{
    res.send("Hello ");
})

app.get("/about",(req,res)=>{
  res.send("Contact form ");
})

app.get("/login",(req,res)=>{
    res.send("Sign in form ");
})

app.get("/register",(req,res)=>{
    res.send("Registration form ");
})


app.listen(PORT,() => {
    console.log(`Server is running at port ${PORT}`);
})