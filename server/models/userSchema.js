const mongoose = require('mongoose');
const jwt = require ('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    number:{
        type:Number,
        required:true,
    },
    work:{
        type:String,
        required:true,
    },
    pass:{
        type:String,
        required:true,
    },
    cpass:{
        type:String,
        required:true,
    },
    tokens:[
        {
            token:{
                type:String,
               required:true,
            }
        }
    ]
})


// hashing the password 

userSchema.pre('save',async function(next){
    if(this.isModified('pass')){
        this.pass=await bcrypt.hash(this.pass,12);
        this.cpass=await bcrypt.hash(this.cpass,12);
    }
    next();
});


// Generating Tokens
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }


}

//Collection created
const User = mongoose.model('USER',userSchema);
module.exports = User;
