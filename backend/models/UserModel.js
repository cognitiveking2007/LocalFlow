import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },

  email:{
    type:String,
    required:true,
    unique:true
  },

  password:{
    type:String,
    required:true
  },

  phone:String,

  role:{
    type:String,
    enum:["customer","admin","rider"],
    default:"customer"
  },

  profilePic:{
    type:String,
    default:""
  },

  isOnline:{
    type:Boolean,
    default:false
  },

  address:{
    street:String,
    city:String,
    pincode:String
  }

},{timestamps:true});

export const UserModel=mongoose.model("users",userSchema);