import CustomerLayout from "../../layouts/CustomerLayout";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/cartStore";

function Cart() {

  const navigate = useNavigate();

  const items = useCartStore(
    (state) => state.items
  );

  const removeItem = useCartStore(
    (state) => state.removeItem
  );

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (

    <CustomerLayout>

      <div className="max-w-4xl mx-auto p-4 md:p-6">

        <div>

          <h1 className="text-4xl font-bold">

            Cart

          </h1>

          <p className="text-slate-400 mt-2">

            Review your order

          </p>

        </div>

        {

          items.length === 0

          ?

          <div
            className="
            bg-slate-900
            border
            border-white/5
            rounded-3xl
            p-8
            mt-8
            "
          >

            <p>

              Your cart is empty.

            </p>

          </div>

          :

          <>

            <div className="space-y-4 mt-8">

              {

                items.map((item) => (

                  <div
                    key={item.id}
                    className="
                    bg-slate-900
                    border
                    border-white/5
                    rounded-3xl
                    p-5
                    "
                  >

                    <div className="flex justify-between">

                      <div>

                        <h3 className="font-semibold">

                          {item.name}

                        </h3>

                        <p className="text-slate-400 mt-1">

                          Qty : {item.quantity}

                        </p>

                      </div>

                      <div className="text-right">

                        <p>

                          ₹{item.price * item.quantity}

                        </p>

                        <button

                          onClick={() => removeItem(item.id)}

                          className="
                          mt-3
                          text-red-400
                          text-sm
                          "

                        >

                          Remove

                        </button>

                      </div>

                    </div>

                  </div>

                ))

              }

            </div>

            <div
              className="
              bg-slate-900
              border
              border-white/5
              rounded-3xl
              p-5
              mt-8
              "
            >

              <div className="flex justify-between">

                <h2 className="text-xl font-semibold">

                  Total

                </h2>

                <h2 className="text-xl font-bold">

                  ₹{total}

                </h2>

              </div>

              <button

                onClick={() =>
                  navigate("/customer/checkout")
                }

                className="
                w-full
                mt-6
                py-4
                rounded-2xl
                bg-blue-500
                hover:bg-blue-600
                transition
                "

              >

                Continue to Checkout

              </button>

            </div>

          </>

        }

      </div>

    </CustomerLayout>

  );

}

export default Cart;