import exp from "express";

import { StoreModel }
from "../models/StoreModel.js";

import { verifyToken }
from "../middleware/VerifyToken.js";

export const storeapp=
exp.Router();


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