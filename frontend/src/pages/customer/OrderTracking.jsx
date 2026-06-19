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
  Marker,
  Popup,
  Polyline,
  useMap

}

from "react-leaflet";

import L from "leaflet";

function RecenterMap({ center }){

  const map =
  useMap();

  useEffect(()=>{

    map.setView(
      center,
      map.getZoom(),
      {
        animate:true
      }
    );

  },[center,map]);

  return null;

}

const customerIcon =
L.divIcon({
  className:"",
  html:
  `<div style="width:28px;height:28px;border-radius:9999px;background:#2563eb;border:3px solid white;box-shadow:0 10px 25px rgba(37,99,235,.35);"></div>`,
  iconSize:[28,28],
  iconAnchor:[14,14]
});

const riderIcon =
L.divIcon({
  className:"",
  html:
  `<div style="width:30px;height:30px;border-radius:9999px;background:#10b981;border:3px solid white;box-shadow:0 10px 25px rgba(16,185,129,.35);display:flex;align-items:center;justify-content:center;color:white;font-size:14px;">R</div>`,
  iconSize:[30,30],
  iconAnchor:[15,15]
});

function toPoint(location){

  if(
    location?.lat === undefined ||
    location?.lng === undefined ||
    Number.isNaN(Number(location.lat)) ||
    Number.isNaN(Number(location.lng))
  ){

    return null;

  }

  return {
    lat:Number(location.lat),
    lng:Number(location.lng)
  };

}

function distanceKm(from,to){

  if(!from || !to){

    return null;

  }

  const earthRadius = 6371;

  const dLat =
  (to.lat - from.lat) * Math.PI / 180;

  const dLng =
  (to.lng - from.lng) * Math.PI / 180;

  const lat1 =
  from.lat * Math.PI / 180;

  const lat2 =
  to.lat * Math.PI / 180;

  const a =
  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  Math.cos(lat1) *
  Math.cos(lat2) *
  Math.sin(dLng / 2) *
  Math.sin(dLng / 2);

  return earthRadius * 2 * Math.atan2(
    Math.sqrt(a),
    Math.sqrt(1 - a)
  );

}

function formatEta(distance){

  if(distance === null){

    return "Waiting for rider location";

  }

  const minutes =
  Math.max(
    3,
    Math.ceil((distance / 25) * 60)
  );

  return `${minutes} min`;

}

function OrderTracking() {

  const { id } =
  useParams();

  const [order,setOrder] =
  useState(null);

  const defaultLocation = {

    lat:17.385,

    lng:78.486

  };

  const [riderLocation,setRiderLocation] =
  useState(null);


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

        const matchesOrder =
        data.orderId === id;

        const matchesRider =
        data.riderId &&
        order?.rider?._id &&
        data.riderId === order.rider._id;

        if(matchesOrder || matchesRider){

          setRiderLocation(
            toPoint(data)
          );

        }

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

  },[id,order?.rider?._id]);


  async function loadOrder(){

    try{

      const res =
      await getOrderById(
        id
      );

      setOrder(
        res.data
      );

      const latestLocation =
      toPoint(
        res.data.latestRiderLocation
      );

      if(latestLocation){

        setRiderLocation(
          latestLocation
        );

      }

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

  const customerLocation =
  toPoint(order.deliveryAddress) ||
  toPoint(order.store?.location) ||
  defaultLocation;

  const mapCenter =
  riderLocation ||
  customerLocation;

  const riderDistance =
  distanceKm(
    riderLocation,
    customerLocation
  );

  const eta =
  formatEta(riderDistance);


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
          grid
          grid-cols-1
          md:grid-cols-3
          gap-4
          mt-6
          "
        >

          <div className="bg-slate-900 border border-white/5 rounded-3xl p-5">

            <p className="text-slate-400">

              ETA

            </p>

            <h2 className="text-2xl font-bold mt-3">

              {eta}

            </h2>

          </div>

          <div className="bg-slate-900 border border-white/5 rounded-3xl p-5">

            <p className="text-slate-400">

              Rider

            </p>

            <h2 className="text-xl font-semibold mt-3">

              {order.rider?.name || "Not assigned yet"}

            </h2>

            <p className="text-slate-400 mt-1">

              {order.rider?.phone || order.rider?.email || "Waiting for rider"}

            </p>

          </div>

          <div className="bg-slate-900 border border-white/5 rounded-3xl p-5">

            <p className="text-slate-400">

              Distance

            </p>

            <h2 className="text-2xl font-bold mt-3">

              {
                riderDistance === null
                ? "Live soon"
                : `${riderDistance.toFixed(1)} km`
              }

            </h2>

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

          <div className="flex flex-wrap gap-4 mt-4 text-sm">

            <span className="flex items-center gap-2 text-slate-300">

              <span className="w-3 h-3 rounded-full bg-blue-600"></span>

              Delivery address

            </span>

            <span className="flex items-center gap-2 text-slate-300">

              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>

              Rider

            </span>

          </div>


          <div className="mt-6">

            <MapContainer

              center={[

                mapCenter.lat,

                mapCenter.lng

              ]}

              zoom={15}

              style={{

                height:"400px",

                width:"100%"

              }}

            >

              <RecenterMap
                center={[
                  mapCenter.lat,
                  mapCenter.lng
                ]}
              />

              <TileLayer

                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

              />


              <Marker

                position={[

                  customerLocation.lat,

                  customerLocation.lng

                ]}

                icon={customerIcon}

              >

                <Popup>

                  Delivery address

                </Popup>

              </Marker>


              {
                riderLocation &&
                <Marker

                  position={[

                    riderLocation.lat,

                    riderLocation.lng

                  ]}

                  icon={riderIcon}

                >

                  <Popup>

                    {order.rider?.name || "Rider"}

                  </Popup>

                </Marker>

              }


              {
                riderLocation &&
                <Polyline
                  positions={[
                    [
                      riderLocation.lat,
                      riderLocation.lng
                    ],
                    [
                      customerLocation.lat,
                      customerLocation.lng
                    ]
                  ]}
                  pathOptions={{
                    color:"#38bdf8",
                    weight:4,
                    opacity:.8
                  }}
                />
              }


            </MapContainer>

            {
              !riderLocation &&
              <p className="text-slate-400 mt-4">

                Rider location will appear here once the assigned rider starts sharing GPS updates.

              </p>
            }

          </div>

        </div>

      </div>

    </CustomerLayout>

  );

}

export default OrderTracking;
