/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect,useState } from "react";

import DashboardLayout
from "../../layouts/DashboardLayout";

import {
getStoreRiders
}
from "../../api/storeAPI";

function StoreRiders(){

const [assigned,setAssigned]=
useState([]);

const [available,setAvailable]=
useState([]);

async function loadRiders(){

try{

const res =
await getStoreRiders();

setAssigned(res.data.assignedRiders || []);
setAvailable(res.data.availableRiders || []);

}
catch(err){

console.log(err);

}

}

useEffect(()=>{

loadRiders();

},[]);

return(

<DashboardLayout>

<div className="max-w-7xl mx-auto p-4 md:p-6">

<div>

<p className="text-slate-400">

Delivery Team

</p>

<h1 className="text-4xl font-bold mt-2">

Riders

</h1>

</div>

<div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

<section>

<h2 className="text-2xl font-semibold">

Your Riders

</h2>

<div className="space-y-4 mt-5">

{
assigned.length===0
?
<div className="bg-slate-900 border border-white/5 rounded-3xl p-6">

No riders assigned yet

</div>
:
assigned.map(rider=>(

<div
key={rider._id}
className="bg-slate-900 border border-white/5 rounded-3xl p-6"
>

<h3 className="text-xl font-semibold">

{rider.name}

</h3>

<p className="text-slate-400 mt-2">

{rider.email}

</p>

</div>

))
}

</div>

</section>

<section>

<h2 className="text-2xl font-semibold">

Available Riders

</h2>

<div className="space-y-4 mt-5">

{
available.map(rider=>(

<div
key={rider._id}
className="bg-slate-900 border border-white/5 rounded-3xl p-6"
>

<h3 className="text-xl font-semibold">

{rider.name}

</h3>

<p className="text-slate-400 mt-2">

{rider.email}

</p>

</div>

))
}

</div>

</section>

</div>

</div>

</DashboardLayout>

);

}

export default StoreRiders;
