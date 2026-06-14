import { create } from "zustand";

import {
  getProfile,
  logout
}
from "../api/authAPI";

const useAuthStore = create((set)=>({

  user:null,

  loading:true,


  getProfile:async()=>{

    try{

      const res =
      await getProfile();

      set({

        user:res.data,

        loading:false

      });

    }
    catch(err){

      set({

        user:null,

        loading:false

      });

    }

  },


  logout:()=>{

    localStorage.removeItem(
    "token"
    );

    set({

     user:null,

     loading:false

     });

}

}));

export default useAuthStore;

