import exp from "express";

import { OrderModel }
from "../models/OrderModel.js";

import { EarningsModel }
from "../models/EarningsModel.js";

import { verifyToken }
from "../middleware/VerifyToken.js";

export const riderapp=
exp.Router();



riderapp.get(
"/orders",

verifyToken("rider"),

async(req,res)=>{

const orders=
await OrderModel.find({

rider:req.user.id

});

res.json(orders);

});


riderapp.get(
"/earnings",

verifyToken("rider"),

async(req,res)=>{

const earnings=
await EarningsModel.find({

rider:req.user.id

});

res.json(earnings);

});