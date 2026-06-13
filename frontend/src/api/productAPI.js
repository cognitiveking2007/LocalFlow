import api from "./axios";

export const getProducts=(id)=>{

return api.get(
`/product-api/store/${id}`
);

};