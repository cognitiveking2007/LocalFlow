import { STATUS_COLORS } from "../../utils/constants";

function StatusBadge({ status }) {

  return (

    <span
      className={`
        px-3 py-1 rounded-full text-sm text-white
        ${STATUS_COLORS[status]}
      `}
    >
      {status}
    </span>

  );
}

export default StatusBadge;