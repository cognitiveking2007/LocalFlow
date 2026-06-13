import {

useEffect,
useState

}

from "react";

import {

useNavigate

}

from "react-router-dom";

import CustomerLayout

from "../../layouts/CustomerLayout";

import {

getMyOrders

}

from "../../api/orderAPI";


function Orders(){

const navigate=
useNavigate();

const [orders,setOrders]=
useState([]);


useEffect(()=>{

loadOrders();

},[]);


async function loadOrders(){

try{

const res=

await getMyOrders();

setOrders(

res.data

);

}

catch(err){

console.log(err);

}

}


return(

<CustomerLayout>

<div className="max-w-6xl mx-auto">

<p className="text-slate-400">

History

</p>

<h1 className="text-4xl font-bold mt-2">

My Orders

</h1>


{

orders.length===0

?

<div

className="
bg-slate-900
border
border-white/5
rounded-3xl
p-8
mt-8
text-center
"

>

<h2 className="text-2xl font-semibold">

No orders yet

</h2>

<p className="text-slate-400 mt-3">

Place your first order to see them here.

</p>

</div>

:

<div className="space-y-6 mt-8">

{

orders.map(order=>(

<div

key={order._id}

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

Order #

{

order._id.slice(-6)

}

</h2>

<p className="text-slate-400 mt-3">

{

order.store?.name ||

"Store"

}

</p>

</div>


<div>

<p className="text-xl font-bold">

₹{

order.total

}

</p>

<p className="capitalize text-blue-400 mt-2">

{

order.status

}

</p>

</div>

</div>


<button

onClick={()=>

navigate(

`/customer/order/${order._id}`

)

}

className="
mt-6
px-5
py-3
rounded-2xl
bg-blue-500
hover:bg-blue-600
transition
"

>

Track Order

</button>

</div>

))

}

</div>

}

</div>

</CustomerLayout>

);

}


export default Orders;