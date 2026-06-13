import { useEffect,useState } from "react";

import RiderLayout from "../../layouts/RiderLayout";

import {
  getRiderOrders
}
from "../../api/riderAPI";

import {
  updateOrderStatus
}
from "../../api/orderAPI";

function AssignedOrders(){

  const [orders,setOrders]=
  useState([]);

  useEffect(()=>{

    loadOrders();

  },[]);


  async function loadOrders(){

    try{

      const res=
      await getRiderOrders();

      setOrders(
        res.data
      );

    }
    catch(err){

      console.log(err);

    }

  }


  async function changeStatus(
    id,
    status
  ){

    try{

      await updateOrderStatus(
        id,
        status
      );

      loadOrders();

    }
    catch(err){

      console.log(err);

    }

  }


  return(

    <RiderLayout>

      <div>

        <p className="text-slate-400">

          Deliveries

        </p>

        <h1 className="text-4xl font-bold mt-2">

          Assigned Orders

        </h1>

      </div>


      {

        orders.length===0

        ?

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

          No assigned orders

        </div>

        :

        <div className="space-y-6 mt-8">

          {

            orders.map(order=>(

              <div

                key={order._id}

                className="
                bg-slate-900
                border
                border-white/5
                rounded-3xl
                p-6
                "
              >

                <h2 className="text-2xl font-semibold">

                  Order #{order._id.slice(-6)}

                </h2>


                <p className="text-slate-400 mt-4">

                  Total : ₹{order.total}

                </p>


                <p className="text-blue-400 mt-4 capitalize">

                  {order.status}

                </p>


                <div className="flex gap-4 mt-8">

                  <button

                    onClick={()=>
                      changeStatus(
                        order._id,
                        "pickedUp"
                      )
                    }

                    className="
                    px-6
                    py-3
                    rounded-2xl
                    bg-violet-500
                    "

                  >

                    Picked Up

                  </button>


                  <button

                    onClick={()=>
                      changeStatus(
                        order._id,
                        "delivered"
                      )
                    }

                    className="
                    px-6
                    py-3
                    rounded-2xl
                    bg-emerald-500
                    "

                  >

                    Delivered

                  </button>

                </div>

              </div>

            ))

          }

        </div>

      }

    </RiderLayout>

  );

}

export default AssignedOrders;