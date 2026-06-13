import DashboardLayout
from "../../layouts/DashboardLayout";

function Settings(){

return(

<DashboardLayout>

<div>

<p className="text-slate-400">

Administration

</p>

<h1 className="text-4xl font-bold mt-2">

Settings

</h1>

</div>


<div

className="
space-y-6
mt-8
"

>

<div

className="
bg-slate-900
border
border-white/5
rounded-3xl
p-6
"

>

<h2 className="text-2xl font-semibold">

Application

</h2>

<p className="text-slate-400 mt-4">

LocalFlow v1.0

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

<h2 className="text-2xl font-semibold">

Database

</h2>

<p className="text-emerald-400 mt-4">

MongoDB Connected

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

<h2 className="text-2xl font-semibold">

Realtime Server

</h2>

<p className="text-emerald-400 mt-4">

Socket.IO Running

</p>

</div>

</div>

</DashboardLayout>

);

}

export default Settings;