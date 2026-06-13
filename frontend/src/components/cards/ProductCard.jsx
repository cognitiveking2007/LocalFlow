import useCartStore from "../../store/cartStore";
import { useNavigate } from "react-router-dom";

function ProductCard({
  id,
  image,
  name,
  price
}) {

  const addItem = useCartStore(
    state => state.addItem
  );
  const navigate = useNavigate();

  return (

    <div
      className="
      bg-slate-900
      border
      border-white/5
      rounded-3xl
      overflow-hidden
      "
    >

      <div
        className="
        h-36
        bg-slate-800
        flex
        items-center
        justify-center
        text-5xl
        "
      >

        {image}

      </div>

      <div className="p-4">

        <h3 className="font-semibold">

          {name}

        </h3>

        <p className="text-slate-400 mt-1">

          ₹{price}

        </p>

        <button

         onClick={() => {

  

  addItem({
          id,
         image,
          name,
          price
         });

         

          navigate("/customer/cart");
         }}
          className="
          w-full
          mt-5
          py-3
          rounded-2xl
          bg-blue-500
          hover:bg-blue-600
          transition
          "

        >

          Add To Cart

        </button>

      </div>

    </div>

  );

}

export default ProductCard;