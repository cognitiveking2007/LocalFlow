import api from "./axios";

export const getProducts=(id)=>{

return api.get(
`/product-api/store/${id}`
);

};

export const getMyProducts = () => {

return api.get(
"/product-api/mine"
);

};

export const createProduct = (data) => {

return api.post(
"/product-api/create",
data
);

};

export const updateProduct = (
id,
data
) => {

return api.put(
`/product-api/${id}`,
data
);

};

export const deleteProduct = (id) => {

return api.delete(
`/product-api/${id}`
);

};
