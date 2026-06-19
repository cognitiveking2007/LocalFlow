import CustomerLayout from "../../layouts/CustomerLayout";
import { useNavigate } from "react-router-dom";

import useCartStore from "../../store/cartStore";

import { createOrder }
from "../../api/orderAPI";

function Checkout(){

const navigate=
useNavigate();

const items=
useCartStore(
state=>state.items
);

const clearCart=
useCartStore(
state=>state.clearCart
);

const total=
items.reduce(

(sum,item)=>

sum+
item.price*item.quantity,

0

);


async function handlePlaceOrder(){

try{

const orderProducts=

items.map(item=>({

product:item.id,

quantity:item.quantity

}));


const res=
await createOrder({

products:
orderProducts,

total,

deliveryAddress:{

street:"Kothapet",

city:"Hyderabad",

pincode:"500035"

,

lat:17.3687,

lng:78.5247

},

paymentMethod:
"COD"

});


clearCart();

navigate(

`/customer/order/${res.data._id}`

);

}
catch(err){

console.log(err);

}

}


return(

<CustomerLayout>

<div className="max-w-4xl mx-auto p-4 md:p-6">

<div>

<p className="text-slate-400">

Almost there

</p>

<h1 className="text-4xl font-bold mt-2">

Checkout

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

<h2 className="text-xl font-semibold">

Order Summary

</h2>


<div className="space-y-4 mt-6">

{

items.map(item=>(

<div

key={item.id}

className="flex justify-between"

>

<p>

{item.name} x{item.quantity}

</p>

<p>

₹{item.price*item.quantity}

</p>

</div>

))

}

</div>


<div className="flex justify-between mt-8 text-xl font-bold">

<p>

Total

</p>

<p>

₹{total}

</p>

</div>


<button

onClick={handlePlaceOrder}

className="
w-full
mt-8
py-4
rounded-2xl
bg-blue-500
hover:bg-blue-600
transition
"

>

Place Order

</button>

</div>

</div>

</CustomerLayout>

);

}

export default Checkout;
