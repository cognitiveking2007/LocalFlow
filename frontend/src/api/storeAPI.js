import api from "./axios";

export const getStores=()=>{

return api.get(
"/store-api/all"
);

};


export const getStore=(id)=>{

return api.get(
`/store-api/${id}`
);

};

export const createStore = (data) => {

  return api.post(
    "/store-api/create",
    data
  );

};

export const getMyStore = () => {

  return api.get(
    "/store-api/my-store"
  );

};

export const updateMyStore = (data) => {

  return api.put(
    "/store-api/my-store",
    data
  );

};

export const getStoreDashboard = () => {

  return api.get(
    "/store-api/dashboard"
  );

};

export const getStoreOrders = () => {

  return api.get(
    "/store-api/orders"
  );

};

export const assignStoreOrderRider = (
  orderId,
  riderId
) => {

  return api.put(
    `/store-api/orders/${orderId}/assign`,
    {
      riderId
    }
  );

};

export const updateStoreOrderStatus = (
  orderId,
  status
) => {

  return api.put(
    `/store-api/orders/${orderId}/status`,
    {
      status
    }
  );

};

export const getStoreRiders = () => {

  return api.get(
    "/store-api/riders"
  );

};

export const getStoreAnalytics = () => {

  return api.get(
    "/store-api/analytics"
  );

};
