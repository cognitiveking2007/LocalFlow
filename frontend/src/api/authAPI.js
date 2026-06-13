import api from "./axios";

export const login=(data)=>{

  return api.post(
    "/auth/login",
    data
  );

};

export const register=(data)=>{

  return api.post(
    "/auth/register",
    data
  );

};

export const getProfile=()=>{

  return api.get(
    "/auth/profile"
  );

};

export const logout=()=>{

  return api.post(
    "/auth/logout"
  );

};