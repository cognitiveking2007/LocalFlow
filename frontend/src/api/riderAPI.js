import api from "./axios";

export const getRiderOrders=()=>{

return api.get(
"/rider-api/orders"
);

};

export const getEarnings=()=>{

return api.get(
"/rider-api/earnings"
);

};