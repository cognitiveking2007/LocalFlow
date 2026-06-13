import api from "./axios";

export const getDashboard=()=>{

return api.get(
"/admin-api/dashboard"
);

};

export const getStats = ()=>{

return api.get(
"/admin-api/stats"
);

};

export const getRiders=()=>{

return api.get(
"/admin-api/riders"
);

};