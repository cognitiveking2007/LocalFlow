/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect,useState } from "react";

import DashboardLayout
from "../../layouts/DashboardLayout";

import {
Bar,
BarChart,
Cell,
Pie,
PieChart,
ResponsiveContainer,
Tooltip,
XAxis,
YAxis
}
from "recharts";

import {
getStoreAnalytics,
getStoreDashboard
}
from "../../api/storeAPI";

const COLORS=[
"#3B82F6",
"#8B5CF6",
"#F59E0B",
"#10B981",
"#EF4444"
];

function StoreAnalytics(){

const [summary,setSummary]=
useState(null);

const [statusData,setStatusData]=
useState([]);

async function loadAnalytics(){

try{

const [statsRes,analyticsRes] =
await Promise.all([
getStoreDashboard(),
getStoreAnalytics()
]);

setSummary(statsRes.data);

setStatusData(
(analyticsRes.data.ordersByStatus || []).map(item=>({
name:item._id,
orders:item.orders,
revenue:item.revenue
}))
);

}
catch(err){

console.log(err);

}

}

useEffect(()=>{

loadAnalytics();

},[]);

return(

<DashboardLayout>

<div className="max-w-7xl mx-auto p-4 md:p-6">

<div>

<p className="text-slate-400">

Business Insights

</p>

<h1 className="text-4xl font-bold mt-2">

Analytics

</h1>

</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

{
[
["Revenue",`₹${summary?.revenue || 0}`],
["Orders",summary?.totalOrders || 0],
["Delivered",summary?.deliveredOrders || 0]
].map(item=>(

<div
key={item[0]}
className="bg-slate-900 border border-white/5 rounded-3xl p-6"
>

<p className="text-slate-400">

{item[0]}

</p>

<h2 className="text-3xl font-bold mt-4">

{item[1]}

</h2>

</div>

))
}

</div>

<div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

<div className="bg-slate-900 border border-white/5 rounded-3xl p-6">

<h2 className="text-xl font-semibold">

Orders by Status

</h2>

<div className="h-80 mt-6">

<ResponsiveContainer>

<BarChart data={statusData}>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Bar dataKey="orders" fill="#3B82F6"/>

</BarChart>

</ResponsiveContainer>

</div>

</div>

<div className="bg-slate-900 border border-white/5 rounded-3xl p-6">

<h2 className="text-xl font-semibold">

Revenue by Status

</h2>

<div className="h-80 mt-6">

<ResponsiveContainer>

<PieChart>

<Pie
data={statusData}
dataKey="revenue"
nameKey="name"
outerRadius={110}
label
>

{
statusData.map((entry,index)=>(

<Cell
key={entry.name}
fill={COLORS[index % COLORS.length]}
/>

))
}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>

</div>

</div>

</div>

</DashboardLayout>

);

}

export default StoreAnalytics;
