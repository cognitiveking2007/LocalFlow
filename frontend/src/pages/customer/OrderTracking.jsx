import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CustomerLayout from "../../layouts/CustomerLayout";

import { getOrderById }
from "../../api/orderAPI";

import socket
from "../../socket";

import {

  MapContainer,
  TileLayer,
  Marker

}

from "react-leaflet";

function OrderTracking() {

  const { id } =
  useParams();

  const [order,setOrder] =
  useState(null);

  const [location,setLocation] =
  useState({

    lat:17.385,

    lng:78.486

  });


  useEffect(()=>{

    loadOrder();


    socket.on(

      "orderUpdated",

      (updatedOrder)=>{

        if(

          updatedOrder._id===id

        ){

          setOrder(
            updatedOrder
          );

        }

      }

    );


    socket.on(

      "receiveLocation",

      (data)=>{

        setLocation(
          data
        );

      }

    );


    return ()=>{

      socket.off(
        "orderUpdated"
      );

      socket.off(
        "receiveLocation"
      );

    };

  },[id]);


  async function loadOrder(){

    try{

      const res =
      await getOrderById(
        id
      );

      setOrder(
        res.data
      );

    }
    catch(err){

      console.log(err);

    }

  }


  if(!order){

    return(

      <CustomerLayout>

        <div className="max-w-4xl mx-auto p-6">

          <h1 className="text-3xl font-bold">

            Loading...

          </h1>

        </div>

      </CustomerLayout>

    );

  }


  const steps=[

    "placed",

    "assigned",

    "pickedUp",

    "outForDelivery",

    "delivered"

  ];


  const currentStep =
  steps.indexOf(
    order.status
  );


  return(

    <CustomerLayout>

      <div className="max-w-4xl mx-auto p-4 md:p-6">

        <div>

          <p className="text-slate-400">

            Track your order

          </p>

          <h1 className="text-4xl font-bold mt-2">

            Order #

            {order._id.slice(-6)}

          </h1>

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

            Current Status

          </h2>

          <p className="text-blue-400 text-2xl mt-4 capitalize">

            {order.status}

          </p>

        </div>


        <div
          className="
          bg-slate-900
          border
          border-white/5
          rounded-3xl
          p-6
          mt-6
          "
        >

          <h2 className="text-xl font-semibold">

            Order Progress

          </h2>

          <div className="space-y-8 mt-8">

            {

              steps.map((step,index)=>(

                <div

                  key={step}

                  className="
                  flex
                  gap-4
                  items-center
                  "

                >

                  <div

                    className={`

                    w-10
                    h-10

                    rounded-full

                    flex
                    items-center
                    justify-center

                    ${
                      index<=currentStep
                      ?
                      "bg-blue-500"
                      :
                      "bg-slate-700"
                    }

                    `}

                  >

                    {index+1}

                  </div>

                  <p className="capitalize">

                    {step}

                  </p>

                </div>

              ))

            }

          </div>

        </div>


        <div
          className="
          bg-slate-900
          border
          border-white/5
          rounded-3xl
          p-6
          mt-6
          "
        >

          <h2 className="text-xl font-semibold">

            Live Rider Location

          </h2>


          <div className="mt-6">

            <MapContainer

              center={[

                location.lat,

                location.lng

              ]}

              zoom={15}

              style={{

                height:"400px",

                width:"100%"

              }}

            >

              <TileLayer

                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

              />


              <Marker

                position={[

                  location.lat,

                  location.lng

                ]}

              />

            </MapContainer>

          </div>

        </div>

      </div>

    </CustomerLayout>

  );

}

export default OrderTracking;
