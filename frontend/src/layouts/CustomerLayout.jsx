import { useNavigate } from "react-router-dom";

import useAuthStore
from "../store/authStore";

import CustomerSidebar
from "../components/layout/CustomerSidebar";

import BottomNav
from "../components/layout/BottomNav";

function CustomerLayout({

children

}){

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
min-h-screen
bg-slate-950
text-white
"

>

<button

onClick={handleLogout}

className="
fixed
top-5
right-5

z-50

px-5
py-3

rounded-2xl

bg-red-500

hover:bg-red-600

transition
"

>

Logout

</button>


<div className="hidden lg:block">

<CustomerSidebar/>

</div>


<main

className="
lg:ml-72

p-4
md:p-6

pb-28
"

>

{children}

</main>


<div

className="
fixed
bottom-0
w-full

lg:hidden
"

>

<BottomNav/>

</div>

</div>

);

}

export default CustomerLayout;