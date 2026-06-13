import { useEffect,useState }
from "react";

import RiderLayout
from "../../layouts/RiderLayout";

import {
getProfile
}
from "../../api/authAPI";

import {
getRiderOrders,
getEarnings
}
from "../../api/riderAPI";

function Profile(){

const [user,setUser]=
useState(null);

const [orders,setOrders]=
useState([]);

const [earnings,setEarnings]=
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


if(!user){

return(

<RiderLayout>

Loading...

</RiderLayout>

);

}


const completedDeliveries=

orders.filter(

order=>

order.status==="delivered"

).length;


const totalEarnings=

earnings.reduce(

(sum,item)=>

sum+item.amount,

0

);


return(

<RiderLayout>

<div>

<p className="text-slate-400">

Account

</p>

<h1 className="text-4xl font-bold mt-2">

Profile

</h1>

</div>


<div className="grid md:grid-cols-2 gap-6 mt-8">

<div

className="
bg-slate-900
border
border-white/5
rounded-3xl
p-6
"

>

<h2 className="text-3xl font-bold">

{user.name}

</h2>

<p className="text-slate-400 mt-4">

{user.email}

</p>

</div>


<div

className="
bg-slate-900
border
border-white/5
rounded-3xl
p-6
"

>

<p className="text-slate-400">

Completed Deliveries

</p>

<h2 className="text-4xl font-bold mt-4">

{completedDeliveries}

</h2>

</div>


<div

className="
bg-slate-900
border
border-white/5
rounded-3xl
p-6
"

>

<p className="text-slate-400">

Lifetime Earnings

</p>

<h2 className="text-4xl font-bold mt-4">

₹{totalEarnings}

</h2>

</div>

</div>

</RiderLayout>

);

}

export default Profile;