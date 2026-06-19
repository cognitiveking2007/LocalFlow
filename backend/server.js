import exp from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import cors from "cors";
//import cookieParser from "cookie-parser";

import { createServer } from "http";
import { Server } from "socket.io";

// APIs
import { authapp } from "./APIs/auth_api.js"; 
import { customerapp } from "./APIs/customer_api.js";
import { riderapp } from "./APIs/rider_api.js";
import { adminapp } from "./APIs/admin_api.js";
import { storeapp } from "./APIs/store_api.js";
import { orderapp } from "./APIs/order_api.js";
import { productapp } from "./APIs/product_api.js";

config();

const app = exp();

const clientURL =
process.env.CLIENT_URL ||
"http://localhost:5173";

// create HTTP server
const httpServer = createServer(app);

// socket setup
export const io = new Server(httpServer,{
  cors:{
    origin:clientURL,
    credentials:true
  }
});


// middleware
app.use(cors({
  origin:clientURL,
  credentials:true,
  allowedHeaders:[
    "Content-Type",
    "Authorization"
  ]
}));

//app.use(cookieParser());

app.use(exp.json());


// database connection
const port = process.env.PORT || 5002;

const connectDB = async()=>{

try{

await connect(process.env.MONGO_URI);

console.log("MongoDB Connected");


httpServer.listen(port,()=>{

console.log(`Server listening on ${port}`);

});

}
catch(err){

console.log("DB connection error:",err);

}

};

connectDB();


// socket logic
io.on("connection",(socket)=>{

console.log("Connected:",socket.id);

socket.on("locationUpdate",(data)=>{

 io.emit("receiveLocation",data);

});

socket.on("disconnect",()=>{

console.log("Disconnected");

});

});


// routes
app.use("/auth",authapp);

app.use("/customer-api",customerapp);

app.use("/rider-api",riderapp);

app.use("/admin-api",adminapp);

app.use("/store-api",storeapp);

app.use("/order-api",orderapp);

app.use("/product-api",productapp);


// health route
app.get("/",(req,res)=>{

res.send({
message:
"Hyper Local Delivery API Running"
});

});


// invalid route
app.use((req,res)=>{

res.status(404).json({

message:
`Path ${req.url} invalid`

});

});


// centralized error handler
app.use(
(err,req,res,next)=>{

if(err.code===11000){

const field=Object.keys(err.keyValue)[0];

return res.status(409).json({

message:
`${field} already exists`

});

}


if(err.name==="ValidationError"){

return res.status(400).json({

message:
err.message

});

}


console.log(err);

res
.status(500)
.json({

message:
"Internal Server Error",

error:
err.message

});

});
