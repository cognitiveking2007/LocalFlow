import exp from "express";
import { io } from "../server.js";

import { OrderModel }
from "../models/OrderModel.js";

import { verifyToken }
from "../middleware/VerifyToken.js";

export const orderapp =
exp.Router();


// Create Order
orderapp.post(

"/create",

verifyToken("customer"),

async(req,res,next)=>{

try{

const order =
await OrderModel.create({

...req.body,

customer:req.user.id

});

res.json(
order
);

}
catch(err){

next(err);

}

});


// Admin - All Orders
orderapp.get(

"/all",

verifyToken("admin"),

async(req,res,next)=>{

try{

const orders =
await OrderModel.find()

.populate(
"customer rider store"
);

res.json(
orders
);

}
catch(err){

next(err);

}

});


// Admin Assign Rider
orderapp.put(

"/assign/:id",

verifyToken("admin"),

async(req,res,next)=>{

try{

const { riderId } =
req.body;

const updated =
await OrderModel.findByIdAndUpdate(

req.params.id,

{

rider:riderId,

status:"assigned"

},

{

new:true

}

);

res.json(
updated
);

}
catch(err){

next(err);

}

});


// Update Status
orderapp.put(

"/status/:id",

verifyToken("admin","rider"),

async(req,res,next)=>{

try{

const updated =
await OrderModel.findByIdAndUpdate(

req.params.id,

{

status:req.body.status

},

{

new:true

}

)

.populate(
"customer rider store"
);


io.emit(

"orderUpdated",

updated

);


res.json(
updated
);

}
catch(err){

next(err);

}

});


// Customer - My Orders
orderapp.get(

"/my-orders",

verifyToken("customer"),

async(req,res,next)=>{

try{

const orders =
await OrderModel.find({

customer:req.user.id

})

.populate(
"store rider"
)

.sort({

createdAt:-1

});

res.json(
orders
);

}
catch(err){

next(err);

}

});


// Rider - Available Orders
orderapp.get(

"/available",

verifyToken("rider"),

async(req,res,next)=>{

try{

const orders =
await OrderModel.find({

status:"placed"

})

.populate(

"customer store"

);

res.json(
orders
);

}
catch(err){

next(err);

}

});


// Rider Accept Order
orderapp.put(

"/accept/:id",

verifyToken("rider"),

async(req,res,next)=>{

try{

const updated =
await OrderModel.findByIdAndUpdate(

req.params.id,

{

rider:req.user.id,

status:"assigned"

},

{

new:true

}

)

.populate(
"customer rider store"
);


io.emit(

"orderUpdated",

updated

);


res.json(
updated
);

}
catch(err){

next(err);

}

});


// Get Order By Id
// KEEP THIS LAST
orderapp.get(

"/:id",

async(req,res,next)=>{

try{

const order =
await OrderModel.findById(

req.params.id

)

.populate(

"customer rider store"

);

res.json(
order
);

}
catch(err){

next(err);

}

});