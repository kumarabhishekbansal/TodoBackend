const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    title:{
        type:String,
        default:"",
        unique:true     
    },
    description:{
        type:String,
        default:""        
    },
    isCompleted:{
        type:Boolean,
        default:false        
    },createdAt:{
        type:Date,
        default:Date.now()        
    }
});

const User=mongoose.model("User",UserSchema);
module.exports=User;