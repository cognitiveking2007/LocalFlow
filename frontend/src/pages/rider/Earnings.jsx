import {

useEffect,
useState

}

from "react";

import RiderLayout
from "../../layouts/RiderLayout";

import {

getEarnings

}

from "../../api/riderAPI";


function Earnings(){

const [earnings,setEarnings]=
useState([]);


useEffect(()=>{

loadData();

},[]);


async function loadData(){

try{

const res=
await getEarnings();

setEarnings(
res.data
);

}
catch(err){

console.log(err);

}

}


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

Income

</p>

<h1 className="text-4xl font-bold mt-2">

Earnings

</h1>

</div>


<div

className="
bg-slate-900
border
border-white/5
rounded-3xl
p-6
mt-8
"

>

<p className="text-slate-400">

Lifetime Earnings

</p>

<h2 className="text-5xl font-bold mt-4">

₹{totalEarnings}

</h2>

</div>


<div className="space-y-5 mt-8">

{

earnings.map(item=>(

<div

key={item._id}

className="
bg-slate-900
border
border-white/5
rounded-3xl
p-6
flex
justify-between
"

>

<p>

Commission

</p>

<h2 className="text-emerald-400">

₹{item.amount}

</h2>

</div>

))

}

</div>

</RiderLayout>

);

}

export default Earnings;