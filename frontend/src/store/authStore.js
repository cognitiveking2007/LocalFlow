import { create } from "zustand";

import {
  getProfile
}
from "../api/authAPI";

const useAuthStore = create((set)=>({

  user:null,

  loading:true,

  setUser:(user)=>{

    set({

      user,

      loading:false

    });

  },


  getProfile:async()=>{

    try{

      const res =
      await getProfile();

      set({

        user:res.data,

        loading:false

      });

      return res.data;

    }
    catch{

      set({

        user:null,

        loading:false

      });

      return null;

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
