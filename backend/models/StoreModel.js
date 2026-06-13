import mongoose from "mongoose";

const storeSchema=new mongoose.Schema({

  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
  },

  name:String,

  category:{
    type:String,
    enum:["pharmacy","grocery","bakery"]
  },

  logo:String,

  address:String,

  location:{
    lat:Number,
    lng:Number
  },

  isOpen:{
    type:Boolean,
    default:true
  },

  ratings:{
    type:Number,
    default:0
  }

},{timestamps:true});

export const StoreModel=
mongoose.model("stores",storeSchema);