import {
  FiBell,
  FiSearch,
  FiMoon,
  FiLogOut
}
from "react-icons/fi";

import {
  useNavigate
}
from "react-router-dom";

import useAuthStore
from "../../store/authStore";

function TopNavbar(){

const navigate=
useNavigate();

const logout=
useAuthStore(
state=>state.logout
);

async function handleLogout(){

await logout();

navigate(
"/login"
);

}

return(

<div

className="
h-20
flex
items-center
justify-between
gap-3

px-4
md:px-6

border-b
border-white/5

bg-slate-950/70
backdrop-blur-xl

sticky
top-0
z-50
"

>

<div className="flex-1">

<div

className="
flex
items-center
gap-3

bg-slate-900

border
border-white/5

px-4
py-3

rounded-2xl
"

>

<FiSearch/>

<input

placeholder="Search..."

className="
bg-transparent
outline-none
w-full
text-sm
"

/>

</div>

</div>


<div className="flex items-center gap-2">

<button

className="
w-11
h-11

rounded-2xl

bg-slate-900

border
border-white/5

flex
items-center
justify-center
"

>

<FiMoon/>

</button>


<button

className="
w-11
h-11

rounded-2xl

bg-slate-900

border
border-white/5

flex
items-center
justify-center
"

>

<FiBell/>

</button>


<button

onClick={handleLogout}

className="
w-11
h-11

rounded-2xl

bg-red-500/20

border
border-red-500/20

text-red-400

flex
items-center
justify-center
"

>

<FiLogOut/>

</button>

</div>

</div>

);

}

export default TopNavbar;