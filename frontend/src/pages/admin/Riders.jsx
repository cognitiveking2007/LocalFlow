import { useEffect,useState }
from "react";

import DashboardLayout
from "../../layouts/DashboardLayout";

import {
getRiders
}
from "../../api/adminAPI";

function Riders(){

const [riders,setRiders]=
useState([]);

useEffect(()=>{

loadRiders();

},[]);


async function loadRiders(){

try{

const res=
await getRiders();

setRiders(
res.data
);

}

catch(err){

console.log(err);

}

}


return(

<DashboardLayout>

<div>

<p className="text-slate-400">

Operations

</p>

<h1 className="text-4xl font-bold mt-2">

Riders

</h1>

</div>


<div className="space-y-6 mt-8">

{

riders.map(rider=>(

<div

key={rider._id}

className="
bg-slate-900
border
border-white/5
rounded-3xl
p-6
"

>

<h2 className="text-2xl font-semibold">

{rider.name}

</h2>

<p className="text-slate-400 mt-2">

{rider.email}

</p>

</div>

))

}

</div>

</DashboardLayout>

);

}

export default Riders;