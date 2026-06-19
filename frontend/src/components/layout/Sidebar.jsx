import {
  FiHome,
  FiTruck,
  FiMap,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiShoppingBag,
  FiPlusCircle,
  FiPackage
}
from "react-icons/fi";

import {
  NavLink
}
from "react-router-dom";

import useAuthStore
from "../../store/authStore";

const adminLinks = [

  {
    name:"Dashboard",
    icon:<FiHome/>,
    path:"/admin"
  },

  {
    name:"Orders",
    icon:<FiTruck/>,
    path:"/admin/orders"
  },

  {
    name:"Stores",
    icon:<FiShoppingBag/>,
    path:"/admin/stores"
  },

  {
    name:"Add Store",
    icon:<FiPlusCircle/>,
    path:"/admin/add-store"
  },

  {
    name:"Riders",
    icon:<FiUsers/>,
    path:"/admin/riders"
  },

  {
    name:"Live Map",
    icon:<FiMap/>,
    path:"/admin/map"
  },

  {
    name:"Analytics",
    icon:<FiBarChart2/>,
    path:"/admin/analytics"
  },

  {
    name:"Settings",
    icon:<FiSettings/>,
    path:"/admin/settings"
  }

];

const storeLinks = [

  {
    name:"Dashboard",
    icon:<FiHome/>,
    path:"/store"
  },

  {
    name:"Orders",
    icon:<FiTruck/>,
    path:"/store/orders"
  },

  {
    name:"Products",
    icon:<FiPackage/>,
    path:"/store/products"
  },

  {
    name:"Riders",
    icon:<FiUsers/>,
    path:"/store/riders"
  },

  {
    name:"Analytics",
    icon:<FiBarChart2/>,
    path:"/store/analytics"
  },

  {
    name:"Settings",
    icon:<FiSettings/>,
    path:"/store/settings"
  }

];

function Sidebar(){

  const user =
  useAuthStore(
  state=>state.user
  );

  const links =
  user?.role==="store"
  ? storeLinks
  : adminLinks;

  const subtitle =
  user?.role==="store"
  ? "Store Operations"
  : "Delivery Operations";

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

      <div className="mb-12">

        <div
          className="
          w-14
          h-14

          rounded-2xl

          bg-blue-500/15

          border
          border-blue-500/20

          flex
          items-center
          justify-center

          mb-4
          "
        >

          <FiTruck
            size={24}
            className="text-blue-400"
          />

        </div>

        <h1 className="text-2xl font-bold">

          LocalFlow

        </h1>

        <p className="text-slate-400 text-sm mt-1">

          {subtitle}

        </p>

      </div>


      <div className="space-y-2">

        {

          links.map(link=>(

            <NavLink

              key={link.path}

              to={link.path}

              className={({

                isActive

              })=>

                `
                flex
                items-center
                gap-4

                p-4

                rounded-2xl

                transition-all

                duration-200

                ${
                  isActive

                  ?

                  `
                  bg-blue-500/15
                  border
                  border-blue-500/20
                  text-blue-400
                  `

                  :

                  `
                  text-slate-300
                  hover:bg-slate-900
                  hover:text-white
                  `
                }

                `
              }

            >

              <span className="text-lg">

                {link.icon}

              </span>

              <span>

                {link.name}

              </span>

            </NavLink>

          ))

        }

      </div>

    </div>

  );

}

export default Sidebar;
