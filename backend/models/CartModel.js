import mongoose from "mongoose";

const cartSchema=new mongoose.Schema({

  customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
  },

  products:[{

    product:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"products"
    },

    quantity:Number

  }],

  total:Number

},{timestamps:true});

export const CartModel=
mongoose.model("carts",cartSchema);