import { useEffect,useState } from "react";

import CustomerLayout
from "../../layouts/CustomerLayout";

import { getProfile }
from "../../api/authAPI";

import { getMyOrders }
from "../../api/orderAPI";

function Profile(){

const [user,setUser]=
useState(null);

const [orders,setOrders]=
useState([]);

useEffect(()=>{

loadData();

},[]);

async function loadData(){

try{

const userRes=
await getProfile();

setUser(
userRes.data
);

const orderRes=
await getMyOrders();

setOrders(
orderRes.data
);

}
catch(err){

console.log(err);

}

}

if(!user){

return(

<CustomerLayout>

<div className="p-8">

Loading...

</div>

</CustomerLayout>

);

}

const totalSpent=
orders.reduce(

(sum,order)=>

sum + order.total,

0

);

return(

<CustomerLayout>

<div className="max-w-6xl mx-auto">

<h1 className="text-4xl font-bold">

Profile

</h1>

<div className="grid md:grid-cols-2 gap-6 mt-8">

<div className="bg-slate-900 rounded-3xl p-6">

<h2 className="text-2xl font-bold">

{user.name}

</h2>

<p className="text-slate-400 mt-3">

{user.email}

</p>

<p className="text-slate-400 mt-2">

Role : {user.role}

</p>

</div>

<div className="bg-slate-900 rounded-3xl p-6">

<p className="text-slate-400">

Orders Placed

</p>

<h2 className="text-4xl font-bold mt-3">

{orders.length}

</h2>

</div>

<div className="bg-slate-900 rounded-3xl p-6">

<p className="text-slate-400">

Total Spending

</p>

<h2 className="text-4xl font-bold mt-3">

₹{totalSpent}

</h2>

</div>

</div>

</div>

</CustomerLayout>

);

}

export default Profile;