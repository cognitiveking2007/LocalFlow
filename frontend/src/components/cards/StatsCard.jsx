function StatsCard({
  title,
  value,
  icon,
  trend = "+12% today"
}) {
  return (
    <div
      className="
      bg-slate-900
      border
      border-white/5

      rounded-3xl

      p-4

      hover:border-blue-500/20
      transition-all
      "
    >

      <div className="flex justify-between items-center">

        <p className="text-slate-400 text-sm">
          {title}
        </p>

        <div
          className="
          w-10
          h-10

          rounded-xl

          bg-blue-500/10

          border
          border-blue-500/20

          flex
          items-center
          justify-center

          text-blue-400
          "
        >
          {icon}
        </div>

      </div>

      <h2 className="text-3xl font-bold mt-4">
        {value}
      </h2>

      <p className="text-emerald-400 text-sm mt-2">
        {trend}
      </p>

    </div>
  );
}

export default StatsCard;