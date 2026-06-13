import mongoose from "mongoose";

const earningsSchema=
new mongoose.Schema({

  rider:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
  },

  order:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"orders"
  },

  amount:Number

},{timestamps:true});

export const EarningsModel=
mongoose.model(
"earnings",
earningsSchema
);