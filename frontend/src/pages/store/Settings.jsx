/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect,useState } from "react";

import DashboardLayout
from "../../layouts/DashboardLayout";

import {
getMyStore,
updateMyStore
}
from "../../api/storeAPI";

function StoreSettings(){

const [form,setForm]=
useState({
name:"",
category:"pharmacy",
logo:"",
address:"",
lat:"",
lng:"",
isOpen:true
});

async function loadStore(){

try{

const res =
await getMyStore();

if(res.data){

setForm({
name:res.data.name || "",
category:res.data.category || "pharmacy",
logo:res.data.logo || "",
address:res.data.address || "",
lat:String(res.data.location?.lat || ""),
lng:String(res.data.location?.lng || ""),
isOpen:res.data.isOpen ?? true
});

}

}
catch(err){

console.log(err);

}

}

useEffect(()=>{

loadStore();

},[]);

function updateField(field,value){

setForm({
...form,
[field]:value
});

}

async function handleSave(){

try{

await updateMyStore({
name:form.name,
category:form.category,
logo:form.logo,
address:form.address,
isOpen:form.isOpen,
location:{
lat:Number(form.lat),
lng:Number(form.lng)
}
});

alert("Store settings saved");

}
catch(err){

console.log(err);

}

}

return(

<DashboardLayout>

<div className="max-w-4xl mx-auto p-4 md:p-6">

<div>

<p className="text-slate-400">

Store Profile

</p>

<h1 className="text-4xl font-bold mt-2">

Settings

</h1>

</div>

<div className="bg-slate-900 border border-white/5 rounded-3xl p-6 mt-8 space-y-5">

<input
value={form.name}
onChange={(e)=>updateField("name",e.target.value)}
placeholder="Store name"
className="w-full bg-slate-800 rounded-2xl px-4 py-4 outline-none"
/>

<select
value={form.category}
onChange={(e)=>updateField("category",e.target.value)}
className="w-full bg-slate-800 rounded-2xl px-4 py-4 outline-none"
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
value={form.logo}
onChange={(e)=>updateField("logo",e.target.value)}
placeholder="Logo URL"
className="w-full bg-slate-800 rounded-2xl px-4 py-4 outline-none"
/>

<input
value={form.address}
onChange={(e)=>updateField("address",e.target.value)}
placeholder="Address"
className="w-full bg-slate-800 rounded-2xl px-4 py-4 outline-none"
/>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<input
value={form.lat}
onChange={(e)=>updateField("lat",e.target.value)}
placeholder="Latitude"
className="w-full bg-slate-800 rounded-2xl px-4 py-4 outline-none"
/>

<input
value={form.lng}
onChange={(e)=>updateField("lng",e.target.value)}
placeholder="Longitude"
className="w-full bg-slate-800 rounded-2xl px-4 py-4 outline-none"
/>

</div>

<label className="flex items-center gap-3 text-slate-300">

<input
type="checkbox"
checked={form.isOpen}
onChange={(e)=>updateField("isOpen",e.target.checked)}
className="h-5 w-5"
/>

Store is open

</label>

<button
onClick={handleSave}
className="w-full py-4 rounded-2xl bg-blue-500 hover:bg-blue-600 transition"
>

Save Settings

</button>

</div>

</div>

</DashboardLayout>

);

}

export default StoreSettings;
