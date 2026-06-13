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
