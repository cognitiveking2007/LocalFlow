import StatusBadge from "../ui/StatusBadge";

function RecentOrderCard({
  customer,
  amount,
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

          <h3 className="font-semibold">
            {customer}
          </h3>

          <p className="text-slate-400 text-sm mt-1">
            ₹{amount}
          </p>

        </div>

        <StatusBadge status={status} />

      </div>
    </div>
  );
}

export default RecentOrderCard;