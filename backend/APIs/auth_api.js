import exp from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { UserModel } from "../models/UserModel.js";
import { StoreModel } from "../models/StoreModel.js";
import { verifyToken } from "../middleware/VerifyToken.js";

export const authapp=exp.Router();

authapp.post("/register",async(req,res,next)=>{

try{

const user=req.body;

const foundUser=
await UserModel.findOne({
email:user.email
});

if(foundUser){

return res.status(409)
.json({
message:"User already exists"
});
}

const hashedPassword=
await bcrypt.hash(
user.password,
7
);

user.password=
hashedPassword;

const createdUser =
await UserModel.create(user);

if(user.role==="store"){

await StoreModel.create({
owner:createdUser._id,
name:createdUser.name
});

}

res.status(201)
.json({
message:"Registered"
});

}
catch(err){

next(err);

}

});


authapp.post("/login",async(req,res,next)=>{

try{

const {email,password}=req.body;

const user=
await UserModel.findOne({
email
});

if(!user){

return res.status(404)
.json({
message:"User not found"
});
}

const matched=
await bcrypt.compare(
password,
user.password
);

if(!matched){

return res.status(401)
.json({
message:"Wrong password"
});
}

const token=
jwt.sign({

id:user._id,
role:user.role

},
process.env.SECRET_KEY,

{
expiresIn:"1d"
});

/*res.cookie(

"token",

token,

{

httpOnly:true,

sameSite:"none",

secure:true,

maxAge:24*60*60*1000

}

);*/

res.json({
message:"Login success",
user,
token
});

}
catch(err){

next(err);

}

});


authapp.get(
"/profile",
verifyToken(),
async(req,res,next)=>{

try{

const user=
await UserModel
.findById(req.user.id)
.select("-password");

res.json(user);

}
catch(err){

next(err);

}

});

/*authapp.post(
"/logout",
(req,res)=>{

res.clearCookie(

"token",

{

sameSite:"none",

secure:true

}

);

res.send({
message:"Logged out"
});

});*/

authapp.post(

"/logout",

(req,res)=>{

res.json({

message:
"Logged out"

});

}
);
