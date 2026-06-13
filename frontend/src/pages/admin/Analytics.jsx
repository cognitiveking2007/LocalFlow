import DashboardLayout from "../../layouts/DashboardLayout";

import {

BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,

PieChart,
Pie,
Cell,

LineChart,
Line

}

from "recharts";

import {

FiDollarSign,
FiPackage,
FiTruck,
FiUsers

}

from "react-icons/fi";


function Analytics(){

const summary=[

{

title:"Revenue",

value:"₹52,400",

icon:<FiDollarSign size={22}/>

},

{

title:"Orders",

value:"126",

icon:<FiPackage size={22}/>

},

{

title:"Riders",

value:"18",

icon:<FiTruck size={22}/>

},

{

title:"Stores",

value:"42",

icon:<FiUsers size={22}/>

}

];


const revenueData=[

{name:"Mon",value:4000},
{name:"Tue",value:5200},
{name:"Wed",value:6300},
{name:"Thu",value:4800},
{name:"Fri",value:7400}

];


const statusData=[

{name:"Placed",value:10},
{name:"Assigned",value:6},
{name:"Out",value:4},
{name:"Delivered",value:18}

];


const trendData=[

{name:"Week1",orders:20},
{name:"Week2",orders:35},
{name:"Week3",orders:28},
{name:"Week4",orders:42}

];


const COLORS=[

"#3B82F6",
"#8B5CF6",
"#F59E0B",
"#10B981"

];


return(

<DashboardLayout>

<div>

<p className="text-slate-400">

Business Insights

</p>

<h1 className="text-4xl font-bold mt-2">

Analytics

</h1>

</div>


<div
className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
gap-6
mt-8
"
>

{

summary.map(item=>(

<div

key={item.title}

className="
bg-slate-900
border
border-white/5
rounded-3xl
p-6
"

>

<div className="flex justify-between">

<p className="text-slate-400">

{item.title}

</p>

{item.icon}

</div>

<h2 className="text-3xl font-bold mt-6">

{item.value}

</h2>

</div>

))

}

</div>


<div
className="
grid
grid-cols-1
xl:grid-cols-2
gap-6
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

<h2 className="text-xl font-semibold">

Revenue

</h2>

<div className="h-80 mt-6">

<ResponsiveContainer>

<BarChart data={revenueData}>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Bar dataKey="value"/>

</BarChart>

</ResponsiveContainer>

</div>

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

<h2 className="text-xl font-semibold">

Order Status

</h2>

<div className="h-80 mt-6">

<ResponsiveContainer>

<PieChart>

<Pie

data={statusData}

dataKey="value"

outerRadius={100}

>

{

statusData.map(

(entry,index)=>(

<Cell

key={index}

fill={COLORS[index]}

/>

)

)

}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>

</div>

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

Monthly Growth

</h2>

<div className="h-80 mt-6">

<ResponsiveContainer>

<LineChart data={trendData}>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Line

type="monotone"

dataKey="orders"

/>

</LineChart>

</ResponsiveContainer>

</div>

</div>

</DashboardLayout>

);

}

export default Analytics;