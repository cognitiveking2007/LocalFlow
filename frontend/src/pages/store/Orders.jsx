/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect,useState } from "react";

import DashboardLayout
from "../../layouts/DashboardLayout";

import {
assignStoreOrderRider,
getStoreOrders,
getStoreRiders,
updateStoreOrderStatus
}
from "../../api/storeAPI";

const statuses = [
"placed",
"assigned",
"pickedUp",
"outForDelivery",
"delivered",
"cancelled"
];

function StoreOrders(){

const [orders,setOrders]=
useState([]);

const [riders,setRiders]=
useState([]);

async function loadOrders(){

try{

const res =
await getStoreOrders();

setOrders(res.data);

}
catch(err){

console.log(err);

}

}

async function loadRiders(){

try{

const res =
await getStoreRiders();

setRiders(res.data.availableRiders || []);

}
catch(err){

console.log(err);

}

}

useEffect(()=>{

loadOrders();
loadRiders();

},[]);

async function changeStatus(id,status){

try{

await updateStoreOrderStatus(id,status);

loadOrders();

}
catch(err){

console.log(err);

}

}

async function assignRider(orderId,riderId){

if(!riderId){
return;
}

try{

await assignStoreOrderRider(orderId,riderId);

loadOrders();

}
catch(err){

console.log(err);

}

}

return(

<DashboardLayout>

<div className="max-w-7xl mx-auto p-4 md:p-6">

<div>

<p className="text-slate-400">

Store Operations

</p>

<h1 className="text-4xl font-bold mt-2">

Orders

</h1>

</div>

<div className="space-y-6 mt-8">

{
orders.length===0
?
<div className="bg-slate-900 border border-white/5 rounded-3xl p-6">

No orders found

</div>
:
orders.map(order=>(

<div
key={order._id}
className="bg-slate-900 border border-white/5 rounded-3xl p-6"
>

<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">

<div>

<h2 className="text-2xl font-semibold">

Order #{order._id.slice(-6)}

</h2>

<p className="text-slate-400 mt-3">

Customer: {order.customer?.name || "Unknown"}

</p>

<p className="text-slate-400 mt-2">

Rider: {order.rider?.name || "Not assigned"}

</p>

<p className="text-slate-400 mt-2">

Total: ₹{order.total}

</p>

</div>

<span className="capitalize text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-2xl px-4 py-2 self-start">

{order.status}

</span>

</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

<select
value={order.status}
onChange={(e)=>changeStatus(order._id,e.target.value)}
className="bg-slate-800 rounded-2xl px-4 py-4 outline-none"
>

{
statuses.map(status=>(

<option
key={status}
value={status}
>

{status}

</option>

))
}

</select>

<select
value={order.rider?._id || ""}
onChange={(e)=>assignRider(order._id,e.target.value)}
className="bg-slate-800 rounded-2xl px-4 py-4 outline-none"
>

<option value="">

Assign rider

</option>

{
riders.map(rider=>(

<option
key={rider._id}
value={rider._id}
>

{rider.name}

</option>

))
}

</select>

</div>

</div>

))
}

</div>

</div>

</DashboardLayout>

);

}

export default StoreOrders;
