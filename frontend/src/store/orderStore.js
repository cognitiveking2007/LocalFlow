/*import { create } from "zustand";

const useOrderStore = create((set) => ({

  currentOrder: null,

  placeOrder: (order) => {

    set({

      currentOrder: {

        ...order,

        id: Date.now(),

        status: "placed"

      }

    });

  },

  updateStatus: (status) => {

    set((state) => ({

      currentOrder: {

        ...state.currentOrder,

        status

      }

    }));

  },

  clearOrder: () => {

    set({

      currentOrder: null

    });

  }

}));

export default useOrderStore;*/