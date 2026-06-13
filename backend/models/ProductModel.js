import mongoose from "mongoose";

const productSchema=new mongoose.Schema({

  storeId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"stores"
  },

  name:{
    type:String,
    required:true
  },

  description:String,
  
  category:{
 type:String
  },

  price:{
    type:Number,
    required:true
  },

  image:String,

  stock:{
    type:Number,
    default:0
  }

},{timestamps:true});

export const ProductModel=
mongoose.model("products",productSchema);