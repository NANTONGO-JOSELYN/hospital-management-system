import StatusBadge from "./StatusBadge";

const BillsTable = ({ bills }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg mt-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-3">Date</th>
            <th className="p-3">Patient</th>
            <th className="p-3">Doctor</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Status</th>
            <th className="p-3">Mode</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill, index) => (
            <tr key={index} className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">
              <td className="p-3">{bill.date}</td>
              <td className="p-3">{bill.patient}</td>
              <td className="p-3">{bill.doctor}</td>
              <td className="p-3">${bill.amount}</td>
              <td className="p-3"><StatusBadge status={bill.status} /></td>
              <td className="p-3">{bill.mode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillsTable;
