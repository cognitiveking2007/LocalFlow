import {

FiHome,
FiShoppingCart,
FiUser,
FiTruck,
FiPackage,
FiDollarSign

}

from "react-icons/fi";

import {

NavLink

}

from "react-router-dom";

import useAuthStore
from "../../store/authStore";


function BottomNav(){

const user =
useAuthStore(
state => state.user
);


if(!user){

return null;

}


if(

user.role==="customer"

){

return(

<div

className="
bg-slate-900
border-t
border-slate-800
h-16
flex
justify-around
items-center
"

>

<NavLink

to="/customer"

className={

({isActive})=>

isActive

?

"text-blue-500"

:

"text-slate-400"

}

>

<FiHome size={22}/>

</NavLink>


<NavLink

to="/customer/cart"

className={

({isActive})=>

isActive

?

"text-blue-500"

:

"text-slate-400"

}

>

<FiShoppingCart size={22}/>

</NavLink>


<NavLink

to="/customer/orders"

className={

({isActive})=>

isActive

?

"text-blue-500"

:

"text-slate-400"

}

>

<FiPackage size={22}/>

</NavLink>


<NavLink

to="/customer/profile"

className={

({isActive})=>

isActive

?

"text-blue-500"

:

"text-slate-400"

}

>

<FiUser size={22}/>

</NavLink>

</div>

);

}



if(

user.role==="rider"

){

return(

<div

className="
bg-slate-900
border-t
border-slate-800
h-16
flex
justify-around
items-center
"

>

<NavLink

to="/rider"

className={

({isActive})=>

isActive

?

"text-blue-500"

:

"text-slate-400"

}

>

<FiHome size={22}/>

</NavLink>


<NavLink

to="/rider/available"

className={

({isActive})=>

isActive

?

"text-blue-500"

:

"text-slate-400"

}

>

<FiTruck size={22}/>

</NavLink>


<NavLink

to="/rider/orders"

className={

({isActive})=>

isActive

?

"text-blue-500"

:

"text-slate-400"

}

>

<FiPackage size={22}/>

</NavLink>


<NavLink

to="/rider/earnings"

className={

({isActive})=>

isActive

?

"text-blue-500"

:

"text-slate-400"

}

>

<FiDollarSign size={22}/>

</NavLink>


<NavLink

to="/rider/profile"

className={

({isActive})=>

isActive

?

"text-blue-500"

:

"text-slate-400"

}

>

<FiUser size={22}/>

</NavLink>

</div>

);

}


return null;

}


export default BottomNav;