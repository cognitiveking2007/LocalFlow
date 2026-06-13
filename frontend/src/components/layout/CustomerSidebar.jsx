import {
  FiHome,
  FiShoppingBag,
  FiUser,
  FiLogOut
}
from "react-icons/fi";

import {
  NavLink,
  useNavigate
}
from "react-router-dom";

import useAuthStore
from "../../store/authStore";

function CustomerSidebar(){

const navigate=
useNavigate();

const logout=
useAuthStore(
state=>state.logout
);

async function handleLogout(){

await logout();

navigate("/login");

}

return(

<div
className="
fixed
left-0
top-0

w-72
h-screen

bg-slate-950

border-r
border-white/5

p-6
"
>

<h1 className="text-2xl font-bold mb-10">

LocalFlow

</h1>


<div className="space-y-2">

<NavLink

to="/customer"

className="block p-4 rounded-2xl hover:bg-slate-900"

>

<div className="flex items-center gap-4">

<FiHome/>

Home

</div>

</NavLink>


<NavLink

to="/customer/orders"

className="block p-4 rounded-2xl hover:bg-slate-900"

>

<div className="flex items-center gap-4">

<FiShoppingBag/>

Orders

</div>

</NavLink>


<NavLink

to="/customer/profile"

className="block p-4 rounded-2xl hover:bg-slate-900"

>

<div className="flex items-center gap-4">

<FiUser/>

Profile

</div>

</NavLink>


<button

onClick={handleLogout}

className="
w-full

p-4

rounded-2xl

bg-red-500/20

text-red-400

mt-8
"

>

<div className="flex items-center gap-4">

<FiLogOut/>

Logout

</div>

</button>

</div>

</div>

);

}

export default CustomerSidebar;