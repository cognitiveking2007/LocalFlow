import { useEffect,useState }
from "react";

import RiderLayout
from "../../layouts/RiderLayout";

import {
getRiderOrders,
getEarnings
}
from "../../api/riderAPI";

function Dashboard(){

const [orders,setOrders]=
useState([]);

const [earnings,setEarnings]=
useState([]);

useEffect(()=>{

loadData();

},[]);

async function loadData(){

try{

const ordersRes=
await getRiderOrders();

setOrders(
ordersRes.data
);

const earningsRes=
await getEarnings();

setEarnings(
earningsRes.data
);

}
catch(err){

console.log(err);

}

}

const assignedOrders=

orders.filter(

o=>

o.status==="assigned"

).length;

const completedOrders=

orders.filter(

o=>

o.status==="delivered"

).length;

const totalEarnings=

earnings.reduce(

(sum,item)=>

sum + item.amount,

0

);

const activeOrder=

orders.find(

o=>

o.status==="assigned"

||

o.status==="pickedUp"

||

o.status==="outForDelivery"

);

return(

<RiderLayout>

<div>

<p className="text-slate-400">

Welcome Back

</p>

<h1 className="text-4xl font-bold mt-2">

Rider Dashboard

</h1>

</div>

<div

className="
grid
grid-cols-1
md:grid-cols-3
gap-5
mt-8
"

>

<div className="bg-slate-900 rounded-3xl p-6">

<p className="text-slate-400">

Assigned Orders

</p>

<h2 className="text-4xl font-bold mt-3">

{assignedOrders}

</h2>

</div>

<div className="bg-slate-900 rounded-3xl p-6">

<p className="text-slate-400">

Completed Deliveries

</p>

<h2 className="text-4xl font-bold mt-3">

{completedOrders}

</h2>

</div>

<div className="bg-slate-900 rounded-3xl p-6">

<p className="text-slate-400">

Total Earnings

</p>

<h2 className="text-4xl font-bold mt-3">

₹{totalEarnings}

</h2>

</div>

</div>

<div

className="
bg-slate-900
rounded-3xl
p-6
mt-8
"

>

<h2 className="text-2xl font-semibold">

Active Delivery

</h2>

{

activeOrder

?

<div className="mt-5">

<p>

Order #

{activeOrder._id.slice(-6)}

</p>

<p className="text-slate-400 mt-2">

Status :

{activeOrder.status}

</p>

</div>

:

<p className="text-slate-400 mt-4">

No active deliveries

</p>

}

</div>

</RiderLayout>

);

}

export default Dashboard;