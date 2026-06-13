import mongoose from "mongoose";

const notificationSchema=
new mongoose.Schema({

 user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
 },

 message:String,

 read:{
    type:Boolean,
    default:false
 }

},{timestamps:true});

export const NotificationModel=
mongoose.model(
"notifications",
notificationSchema
);