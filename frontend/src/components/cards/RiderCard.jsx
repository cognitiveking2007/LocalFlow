function RiderCard({
  name,
  deliveries,
  status
}) {
  return (
    <div
      className="
      bg-slate-950/40
      border
      border-white/5
      rounded-2xl
      p-4
      hover:border-blue-500/20
      transition
      "
    >
      <div className="flex justify-between items-center">

        <div>

          <h3 className="font-semibold text-lg">
            {name}
          </h3>

          <p className="text-slate-400 text-sm mt-1">
            {deliveries} deliveries
          </p>

        </div>

        <span
          className={`
          px-3
          py-1
          rounded-full
          text-sm

          ${
            status === "online"
              ? "bg-emerald-500 text-white"
              : "bg-slate-600 text-white"
          }
          `}
        >
          {status}
        </span>

      </div>
    </div>
  );
}

export default RiderCard;