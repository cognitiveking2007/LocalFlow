import { useEffect,useState } from "react";

import CustomerLayout from "../../layouts/CustomerLayout";
import CategoryPill from "../../components/ui/CategoryPill";
import StoreCard from "../../components/cards/StoreCard";

import { getStores }
from "../../api/storeAPI";

function Home(){

const [stores,setStores]=
useState([]);

useEffect(()=>{

loadStores();

},[]);


async function loadStores(){

try{

const res=
await getStores();

setStores(
res.data
);

}
catch(err){

console.log(err);

}

}


return(

<CustomerLayout>

<div className="max-w-6xl mx-auto p-4 md:p-6">

<div>

<p className="text-slate-400">

Hello 👋

</p>

<h1 className="text-3xl font-bold mt-2">

What do you need today?

</h1>

</div>


<div className="mt-6">

<input

placeholder="Search stores..."

className="
w-full
bg-slate-900
border
border-white/5
rounded-2xl
px-4
py-4
outline-none
"

/>

</div>


<div
className="
flex
gap-3
overflow-x-auto
mt-6
pb-2
"
>

<CategoryPill
icon="💊"
label="Pharmacy"
/>

<CategoryPill
icon="🥦"
label="Grocery"
/>

<CategoryPill
icon="🍞"
label="Bakery"
/>

</div>


<div className="mt-8">

<h2 className="text-2xl font-semibold">

Nearby Stores

</h2>

<p className="text-slate-400 mt-1">

Fast delivery around you

</p>

</div>


<div className="space-y-4 mt-5">

{

stores.map(store=>(

<StoreCard

key={store._id}

id={store._id}

name={store.name}

category={store.category}

rating={store.ratings}

eta="15 min"

/>

))

}

</div>

</div>

</CustomerLayout>

);

}

export default Home;