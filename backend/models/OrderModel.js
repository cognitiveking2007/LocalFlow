import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({

  customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
  },

  store:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"stores"
  },

  rider:{
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

  total:Number,

  //deliveryAddress:String,
  deliveryAddress:{
   street:String,
   city:String,
   pincode:String,
   lat:Number,
   lng:Number
},

  paymentMethod:{
    type:String,
    enum:["COD","UPI","Card"]
  },

  paymentStatus:{
    type:String,
    enum:["Pending","Paid"],
    default:"Pending"
  },

  status:{
    type:String,
    enum:[
      "placed",
      "assigned",
      "pickedUp",
      "outForDelivery",
      "delivered",
      "cancelled"
    ],
    default:"placed"
  }

},{timestamps:true});

export const OrderModel=
mongoose.model("orders",orderSchema);