import exp from "express";

import { OrderModel }
from "../models/OrderModel.js";

import { verifyToken }
from "../middleware/VerifyToken.js";

export const customerapp=
exp.Router();


customerapp.get(
"/orders",

verifyToken("customer"),

async(req,res)=>{

const orders=
await OrderModel.find({

customer:req.user.id

});

res.json(orders);

});