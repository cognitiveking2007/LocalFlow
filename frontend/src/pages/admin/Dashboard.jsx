import { useEffect,useState } from "react";

import DashboardLayout
from "../../layouts/DashboardLayout";

import StatsCard
from "../../components/cards/StatsCard";

import {

FiPackage,
FiCheckCircle,
FiTruck,
FiUsers,
FiDollarSign

}

from "react-icons/fi";

import {

getStats

}

from "../../api/adminAPI";

function Dashboard(){

const [stats,setStats]=
useState(null);


useEffect(()=>{

loadStats();

},[]);


async function loadStats(){

try{

const res=
await getStats();

setStats(
res.data
);

}
catch(err){

console.log(err);

}

}


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

<div
className="
max-w-7xl
mx-auto
p-4
md:p-6
"
>

<div>

<p className="text-slate-400">

Business Overview

</p>

<h1 className="text-4xl font-bold mt-2">

Dashboard

</h1>

</div>


<div
className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-5
gap-5
mt-8
"
>

<StatsCard

title="Orders"

value={stats.totalOrders}

trend="All Orders"

icon={
<FiPackage size={24}/>
}

/>


<StatsCard

title="Delivered"

value={stats.deliveredOrders}

trend="Completed"

icon={
<FiCheckCircle size={24}/>
}

/>


<StatsCard

title="Riders"

value={stats.riders}

trend="Delivery Team"

icon={
<FiTruck size={24}/>
}

/>


<StatsCard

title="Customers"

value={stats.customers}

trend="Users"

icon={
<FiUsers size={24}/>
}

/>


<StatsCard

title="Revenue"

value={`₹${stats.revenue}`}

trend="Total Earnings"

icon={
<FiDollarSign size={24}/>
}

/>

</div>


<div
className="
bg-slate-900
border
border-white/5
rounded-3xl
mt-8
h-96

flex
items-center
justify-center
"
>

<div className="text-center">

<h2 className="text-2xl font-semibold">

Live Delivery Network

</h2>

<p className="text-slate-400 mt-3">

Monitor riders in real time

</p>

</div>

</div>

</div>

</DashboardLayout>

);

}

export default Dashboard;

