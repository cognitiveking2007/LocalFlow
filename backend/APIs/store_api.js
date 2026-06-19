import exp from "express";

import { StoreModel }
from "../models/StoreModel.js";

import { OrderModel }
from "../models/OrderModel.js";

import { ProductModel }
from "../models/ProductModel.js";

import { UserModel }
from "../models/UserModel.js";

import { verifyToken }
from "../middleware/VerifyToken.js";

export const storeapp=
exp.Router();

async function getOwnedStore(userId){

return StoreModel.findOne({
owner:userId
});

}


storeapp.post(
"/create",

verifyToken("admin"),

async(req,res,next)=>{

try{

const store=
await StoreModel.create(
req.body
);

res.status(201)
.json(store);

}
catch(err){

next(err);

}

});


storeapp.get(
"/my-store",

verifyToken("store"),

async(req,res,next)=>{

try{

const store =
await getOwnedStore(req.user.id);

res.json(store);

}
catch(err){

next(err);

}

});


storeapp.put(
"/my-store",

verifyToken("store"),

async(req,res,next)=>{

try{

const store =
await StoreModel.findOneAndUpdate(

{
owner:req.user.id
},

{
...req.body,
owner:req.user.id
},

{
new:true,
upsert:true,
setDefaultsOnInsert:true
}

);

res.json(store);

}
catch(err){

next(err);

}

});


storeapp.get(
"/dashboard",

verifyToken("store"),

async(req,res,next)=>{

try{

const store =
await getOwnedStore(req.user.id);

if(!store){

return res.json({
store:null,
totalOrders:0,
deliveredOrders:0,
products:0,
riders:0,
revenue:0
});

}

const totalOrders =
await OrderModel.countDocuments({
store:store._id
});

const deliveredOrders =
await OrderModel.countDocuments({
store:store._id,
status:"delivered"
});

const products =
await ProductModel.countDocuments({
storeId:store._id
});

const revenue =
await OrderModel.aggregate([
{
$match:{
store:store._id,
status:"delivered"
}
},
{
$group:{
_id:null,
total:{
$sum:"$total"
}
}
}
]);

const riderIds =
await OrderModel.distinct(
"rider",
{
store:store._id,
rider:{
$ne:null
}
}
);

res.json({
store,
totalOrders,
deliveredOrders,
products,
riders:riderIds.length,
revenue:revenue[0]?.total || 0
});

}
catch(err){

next(err);

}

});


storeapp.get(
"/orders",

verifyToken("store"),

async(req,res,next)=>{

try{

const store =
await getOwnedStore(req.user.id);

if(!store){

return res.json([]);

}

const orders =
await OrderModel.find({
store:store._id
})
.populate("customer rider store")
.populate("products.product")
.sort({
createdAt:-1
});

res.json(orders);

}
catch(err){

next(err);

}

});


storeapp.put(
"/orders/:id/assign",

verifyToken("store"),

async(req,res,next)=>{

try{

const store =
await getOwnedStore(req.user.id);

if(!store){

return res.status(404).json({
message:"Store profile not found"
});

}

const rider =
await UserModel.findOne({
_id:req.body.riderId,
role:"rider"
});

if(!rider){

return res.status(404).json({
message:"Rider not found"
});

}

const updated =
await OrderModel.findOneAndUpdate(
{
_id:req.params.id,
store:store._id
},
{
rider:req.body.riderId,
status:"assigned"
},
{
new:true
}
).populate("customer rider store");

if(!updated){

return res.status(404).json({
message:"Order not found"
});

}

res.json(updated);

}
catch(err){

next(err);

}

});


storeapp.put(
"/orders/:id/status",

verifyToken("store"),

async(req,res,next)=>{

try{

const store =
await getOwnedStore(req.user.id);

if(!store){

return res.status(404).json({
message:"Store profile not found"
});

}

const updated =
await OrderModel.findOneAndUpdate(
{
_id:req.params.id,
store:store._id
},
{
status:req.body.status
},
{
new:true
}
).populate("customer rider store");

if(!updated){

return res.status(404).json({
message:"Order not found"
});

}

res.json(updated);

}
catch(err){

next(err);

}

});


storeapp.get(
"/riders",

verifyToken("store"),

async(req,res,next)=>{

try{

const store =
await getOwnedStore(req.user.id);

const availableRiders =
await UserModel.find({
role:"rider"
}).select("-password");

if(!store){

return res.json({
assignedRiders:[],
availableRiders
});

}

const riderIds =
await OrderModel.distinct(
"rider",
{
store:store._id,
rider:{
$ne:null
}
}
);

const assignedRiders =
await UserModel.find({
_id:{
$in:riderIds
}
}).select("-password");

res.json({
assignedRiders,
availableRiders
});

}
catch(err){

next(err);

}

});


storeapp.get(
"/analytics",

verifyToken("store"),

async(req,res,next)=>{

try{

const store =
await getOwnedStore(req.user.id);

if(!store){

return res.json({
revenueByStatus:[],
ordersByStatus:[]
});

}

const ordersByStatus =
await OrderModel.aggregate([
{
$match:{
store:store._id
}
},
{
$group:{
_id:"$status",
orders:{
$sum:1
},
revenue:{
$sum:"$total"
}
}
}
]);

res.json({
ordersByStatus
});

}
catch(err){

next(err);

}

});


storeapp.get(
"/all",

async(req,res,next)=>{

try{

const stores=
await StoreModel.find();

res.json(stores);

}
catch(err){

next(err);

}

});


storeapp.get(
"/:id",

async(req,res,next)=>{

try{

const store=
await StoreModel.findById(
req.params.id
);

res.json(store);

}
catch(err){

next(err);

}

});
