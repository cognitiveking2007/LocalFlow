await LiveLocationModel
.findOneAndUpdate(

{ rider:data.riderId },

{
 lat:data.lat,
 lng:data.lng
},

{upsert:true}

);