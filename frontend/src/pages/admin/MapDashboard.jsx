import DashboardLayout from "../../layouts/DashboardLayout";

import {

MapContainer,
TileLayer,
Marker

} from "react-leaflet";

import {

useEffect,
useState

} from "react";

import socket from "../../socket";

function MapDashboard(){

  const [location,setLocation]=
  useState({

    lat:17.385,

    lng:78.486

  });


  useEffect(()=>{

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
        "receiveLocation"
      );

    };

  },[]);


  return(

    <DashboardLayout>

      <div>

        <h1 className="text-4xl font-bold mb-8">

          Live Map

        </h1>


        <MapContainer

          center={[

            location.lat,

            location.lng

          ]}

          zoom={15}

          style={{

            height:"600px",

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

    </DashboardLayout>

  );

}

export default MapDashboard;