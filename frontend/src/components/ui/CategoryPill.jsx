function CategoryPill({
  icon,
  label
}) {
  return (
    <button
      className="
      flex
      items-center
      gap-2

      px-4
      py-3

      rounded-2xl

      bg-slate-900

      border
      border-white/5

      whitespace-nowrap

      hover:border-blue-500/20
      transition
      "
    >
      <span>{icon}</span>

      <span>
        {label}
      </span>
    </button>
  );
}

export default CategoryPill;