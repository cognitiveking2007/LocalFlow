import { useState } from "react";

import DashboardLayout
from "../../layouts/DashboardLayout";

import {
createStore
}
from "../../api/storeAPI";

function AddStore(){

const [name,setName]=
useState("");

const [category,setCategory]=
useState("pharmacy");

const [address,setAddress]=
useState("");

const [lat,setLat]=
useState("");

const [lng,setLng]=
useState("");


async function handleSubmit(){

try{

await createStore({

name,

category,

address,

location:{

lat:Number(lat),

lng:Number(lng)

}

});

alert(
"Store created"
);

setName("");
setAddress("");
setLat("");
setLng("");

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

Add Store

</h1>

</div>


<div

className="
bg-slate-900
border
border-white/5
rounded-3xl
p-8
mt-8
space-y-5
"

>

<input

value={name}

onChange={(e)=>
setName(
e.target.value
)
}

placeholder="Store Name"

className="
w-full
bg-slate-800
rounded-2xl
px-4
py-4
outline-none
"

/>


<select

value={category}

onChange={(e)=>
setCategory(
e.target.value
)
}

className="
w-full
bg-slate-800
rounded-2xl
px-4
py-4
outline-none
"

>

<option value="pharmacy">

Pharmacy

</option>

<option value="grocery">

Grocery

</option>

<option value="bakery">

Bakery

</option>

</select>


<input

value={address}

onChange={(e)=>
setAddress(
e.target.value
)
}

placeholder="Address"

className="
w-full
bg-slate-800
rounded-2xl
px-4
py-4
outline-none
"

/>


<input

value={lat}

onChange={(e)=>
setLat(
e.target.value
)
}

placeholder="Latitude"

className="
w-full
bg-slate-800
rounded-2xl
px-4
py-4
outline-none
"

/>


<input

value={lng}

onChange={(e)=>
setLng(
e.target.value
)
}

placeholder="Longitude"

className="
w-full
bg-slate-800
rounded-2xl
px-4
py-4
outline-none
"

/>


<button

onClick={handleSubmit}

className="
w-full
py-4
rounded-2xl
bg-blue-500
hover:bg-blue-600
transition
"

>

Create Store

</button>

</div>

</DashboardLayout>

);

}

export default AddStore;