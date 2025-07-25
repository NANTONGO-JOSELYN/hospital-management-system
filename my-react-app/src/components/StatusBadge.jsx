const StatusBadge = ({ status }) => {
    const color = status === "Paid" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${color}`}>
        {status}
      </span>
    );
  };
  
  export default StatusBadge;
  