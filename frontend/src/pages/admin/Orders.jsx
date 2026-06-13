import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  getOrders,
  updateOrderStatus
}
from "../../api/orderAPI";

function Orders() {

  const [orders,setOrders] =
  useState([]);

  useEffect(()=>{

    loadOrders();

  },[]);


  async function loadOrders(){

    try{

      const res =
      await getOrders();

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

    <DashboardLayout>

      <div className="p-6">

        <div>

          <p className="text-slate-400">

            Operations

          </p>

          <h1 className="text-4xl font-bold mt-2">

            Orders

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

            No orders found

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

                    Customer :

                    {" "}

                    {

                      order.customer?.name ||

                      "Unknown"

                    }

                  </p>


                  <p className="text-slate-400 mt-2">

                    Total :

                    ₹{order.total}

                  </p>


                  <p className="text-slate-400 mt-2">

                    Status :

                    <span className="capitalize text-blue-400">

                      {" "}

                      {order.status}

                    </span>

                  </p>


                  <div className="flex flex-wrap gap-3 mt-8">

                    <button

                      onClick={()=>
                        changeStatus(
                          order._id,
                          "assigned"
                        )
                      }

                      className="
                      px-5
                      py-3
                      rounded-2xl
                      bg-blue-500
                      "

                    >

                      Assign Rider

                    </button>


                    <button

                      onClick={()=>
                        changeStatus(
                          order._id,
                          "pickedUp"
                        )
                      }

                      className="
                      px-5
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
                          "outForDelivery"
                        )
                      }

                      className="
                      px-5
                      py-3
                      rounded-2xl
                      bg-amber-500
                      "

                    >

                      Out For Delivery

                    </button>


                    <button

                      onClick={()=>
                        changeStatus(
                          order._id,
                          "delivered"
                        )
                      }

                      className="
                      px-5
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

      </div>

    </DashboardLayout>

  );

}

export default Orders;