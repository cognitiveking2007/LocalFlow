import exp from "express";

import { UserModel }
from "../models/UserModel.js";

import { OrderModel }
from "../models/OrderModel.js";

import { verifyToken }
from "../middleware/VerifyToken.js";

export const adminapp=
exp.Router();


adminapp.get(
"/dashboard",

verifyToken("admin"),

async(req,res)=>{

const orders=
await OrderModel.countDocuments();

const riders=
await UserModel.countDocuments({
role:"rider"
});

res.json({

totalOrders:orders,

totalRiders:riders

});

});

adminapp.get(

"/stats",

verifyToken("admin"),

async(req,res,next)=>{

try{

const totalOrders =
await OrderModel.countDocuments();

const deliveredOrders =
await OrderModel.countDocuments({

status:"delivered"

});

const riders =
await UserModel.countDocuments({

role:"rider"

});

const customers =
await UserModel.countDocuments({

role:"customer"

});

const revenue =
await OrderModel.aggregate([

{

$group:{

_id:null,

total:{

$sum:"$total"

}

}

}

]);

res.json({

totalOrders,

deliveredOrders,

riders,

customers,

revenue:

revenue[0]?.total || 0

});

}
catch(err){

next(err);

}

});

adminapp.get(

"/riders",

verifyToken("admin"),

async(req,res,next)=>{

try{

const riders=
await UserModel.find({

role:"rider"

}).select(

"-password"

);

res.json(
riders
);

}

catch(err){

next(err);

}

});