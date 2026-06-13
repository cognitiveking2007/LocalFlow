import { useEffect, useState } from "react";

import RiderLayout from "../../layouts/RiderLayout";

import {
  getAvailableOrders,
  acceptOrder
} from "../../api/orderAPI";

function AvailableOrders() {

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {

    loadOrders();

  }, []);


  async function loadOrders() {

    try {

      const res =
        await getAvailableOrders();

      setOrders(
        res.data
      );

    }

    catch (err) {

      console.log(err);

    }

  }


  async function handleAccept(id) {

    try {

      await acceptOrder(id);

      loadOrders();

    }

    catch (err) {

      console.log(err);

    }

  }


  return (

    <RiderLayout>

      <div>

        <p className="text-slate-400">

          Orders waiting

        </p>

        <h1 className="text-4xl font-bold mt-2">

          Available Orders

        </h1>

      </div>


      <div className="space-y-6 mt-8">

        {

          orders.map(order => (

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

                Order #

                {order._id.slice(-6)}

              </h2>

              <p className="mt-4">

                ₹{order.total}

              </p>

              <p className="mt-3">

                Customer :

                {order.customer?.name}

              </p>


              <button

                onClick={() =>
                  handleAccept(
                    order._id
                  )
                }

                className="
                mt-5
                px-6
                py-3
                rounded-2xl
                bg-blue-500
                hover:bg-blue-600
                transition
                "

              >

                Accept Order

              </button>

            </div>

          ))

        }

      </div>

    </RiderLayout>

  );

}

export default AvailableOrders;