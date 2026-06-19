/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect,useState } from "react";

import DashboardLayout
from "../../layouts/DashboardLayout";

import StatsCard
from "../../components/cards/StatsCard";

import {
FiDollarSign,
FiPackage,
FiShoppingBag,
FiTruck,
FiCheckCircle
}
from "react-icons/fi";

import {
getStoreDashboard
}
from "../../api/storeAPI";

function StoreDashboard(){

const [stats,setStats]=
useState(null);

async function loadStats(){

try{

const res =
await getStoreDashboard();

setStats(res.data);

}
catch(err){

console.log(err);

}

}

useEffect(()=>{

loadStats();

},[]);

if(!stats){

return(

<DashboardLayout>

<div className="p-8">

Loading...

</div>

</DashboardLayout>

);

}

return(

<DashboardLayout>

<div className="max-w-7xl mx-auto p-4 md:p-6">

<div>

<p className="text-slate-400">

Store Overview

</p>

<h1 className="text-4xl font-bold mt-2">

{stats.store?.name || "Store Dashboard"}

</h1>

</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5 mt-8">

<StatsCard
title="Orders"
value={stats.totalOrders}
trend="Your Orders"
icon={<FiShoppingBag size={24}/>}
/>

<StatsCard
title="Delivered"
value={stats.deliveredOrders}
trend="Completed"
icon={<FiCheckCircle size={24}/>}
/>

<StatsCard
title="Products"
value={stats.products}
trend="Catalog"
icon={<FiPackage size={24}/>}
/>

<StatsCard
title="Riders"
value={stats.riders}
trend="Assigned Team"
icon={<FiTruck size={24}/>}
/>

<StatsCard
title="Revenue"
value={`₹${stats.revenue}`}
trend="Delivered Orders"
icon={<FiDollarSign size={24}/>}
/>

</div>

<div className="bg-slate-900 border border-white/5 rounded-3xl mt-8 p-8">

<h2 className="text-2xl font-semibold">

Today at a glance

</h2>

<p className="text-slate-400 mt-3">

Manage products, orders, riders and revenue from one workspace.

</p>

</div>

</div>

</DashboardLayout>

);

}

export default StoreDashboard;
