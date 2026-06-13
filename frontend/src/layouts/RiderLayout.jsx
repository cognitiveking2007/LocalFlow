import { useEffect }
from "react";

import { useNavigate }
from "react-router-dom";

import useAuthStore
from "../store/authStore";

import BottomNav
from "../components/layout/BottomNav";

import RiderSidebar
from "../components/layout/RiderSidebar";

import socket
from "../socket";

function RiderLayout({

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


useEffect(()=>{

const watchId=

navigator.geolocation.watchPosition(

(position)=>{

socket.emit(

"locationUpdate",

{

lat:position.coords.latitude,

lng:position.coords.longitude

}

);

},

(error)=>{

console.log(
"GPS Error:",
error
);

},

{

enableHighAccuracy:true

}

);

return()=>{

navigator.geolocation.clearWatch(
watchId
);

};

},[]);


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

<RiderSidebar/>

</div>


<main

className="
lg:ml-72

max-w-7xl

mx-auto

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

export default RiderLayout;