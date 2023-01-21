const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
Key = "MYNAMEISOMKARKANSE"
const personalSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    password: String,
    cpassword: String,
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})
     personalSchema.statics.doesEmailExist = async function(email){
        if(!email) throw new Error("Invalid Email")
        try {
            const use = await this.findOne({email})
        if(use){
            return false; 
        }
        else{
            return true;
        }
        } catch (error) {
                console.log("Error in EmailVal :",error.message)
                return false;   
        }
    }
    
        // Hashing of Password
    personalSchema.pre('save',async function(next){
        try {  
            if(this.isModified('password')){
                // console.log("Changesssss");
                // console.log("Pass before:",this.password);
                this.password=await bcrypt.hash( this.password,10)        
             }      
             next();
        } catch (error) {
            next(error)
        }         
    })
            // // Generating AuthToken
            // personalSchema.methods.generateAuthToken = async function(){
            //     try {
            //          let token = jwt.sign({_id:this._id},Key)
            //          this.tokens = this.tokens.concat({token:token})
            //          await this.save();
            //          return token;
            //     } catch (error) {
            //         console.log(error);
            //     }
            // }


    module.exports = mongoose.model("PersonalData", personalSchema)
