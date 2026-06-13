import mongoose from "mongoose";

const riderLocationSchema=new mongoose.Schema({

  rider:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
  },

  order:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"orders"
  },

  lat:Number,

  lng:Number

},{timestamps:true});

export const RiderLocationModel=
mongoose.model(
"riderlocations",
riderLocationSchema
);