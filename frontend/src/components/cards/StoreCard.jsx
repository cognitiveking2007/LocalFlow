import { useNavigate } from "react-router-dom";

function StoreCard({
  id,
  name,
  rating,
  eta,
  category
}) {

  const navigate = useNavigate();

  return (

    <div
      onClick={() =>
        navigate(`/customer/store/${id}`)
      }

      className="
      cursor-pointer

      bg-slate-900

      border
      border-white/5

      rounded-3xl

      p-5

      hover:border-blue-500/20

      transition
      "
    >

      <div className="flex justify-between">

        <div>

          <h3 className="font-semibold text-lg">
            {name}
          </h3>

          <p className="text-slate-400 text-sm mt-1">
            {category}
          </p>

        </div>

        <div className="text-right">

          <p>
            ⭐ {rating}
          </p>

          <p className="text-slate-400 text-sm">
            {eta}
          </p>

        </div>

      </div>

    </div>

  );

}

export default StoreCard;