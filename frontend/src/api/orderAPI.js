import api from "./axios";

export const createOrder = (data) => {

  return api.post(
    "/order-api/create",
    data
  );

};


export const getOrderById = (id) => {

  return api.get(
    `/order-api/${id}`
  );

};

export const getOrderLocation = (id) => {

  return api.get(
    `/order-api/${id}`
  );

};


export const getOrders = () => {

  return api.get(
    "/order-api/all"
  );

};



export const updateOrderStatus = (
  id,
  status
) => {

  return api.put(

    `/order-api/status/${id}`,

    {
      status
    }

  );

};


export const acceptOrder = (id) => {

  return api.put(
    `/order-api/accept/${id}`
  );

};


export const getAvailableOrders = () => {

  return api.get(
    "/order-api/available"
  );

};

export const getMyOrders=()=>{

return api.get(
"/order-api/my-orders"
);

};


