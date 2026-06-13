import { useEffect,useState }
from "react";

import DashboardLayout
from "../../layouts/DashboardLayout";

import {
getStores
}
from "../../api/storeAPI";

function Stores(){

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

<DashboardLayout>

<div>

<p className="text-slate-400">

Operations

</p>

<h1 className="text-4xl font-bold mt-2">

Stores

</h1>

</div>


<div className="space-y-6 mt-8">

{

stores.map(store=>(

<div

key={store._id}

className="
bg-slate-900
border
border-white/5
rounded-3xl
p-6
"

>

<div className="flex justify-between">

<div>

<h2 className="text-2xl font-semibold">

{store.name}

</h2>

<p className="text-slate-400 mt-2">

{store.category}

</p>

<p className="text-slate-400 mt-2">

{store.address}

</p>

</div>


<div>

<p className="text-blue-400">

⭐ {store.ratings}

</p>

<p className="mt-3">

{

store.isOpen

?

"Open"

:

"Closed"

}

</p>

</div>

</div>

</div>

))

}

</div>

</DashboardLayout>

);

}

export default Stores;