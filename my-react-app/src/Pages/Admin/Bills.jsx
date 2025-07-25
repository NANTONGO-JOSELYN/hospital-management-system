import SidebarAdmin from "../../components/SidebarAdmin";
import TopbarAdmin from "../../components/TopbarAdmin"; 
import BillsTable from "../../components/BillsTable";
//import PaymentSuccess from "../../components/PaymentSuccess";
import SearchBar from "../../components/Search";

const sampleBills = [
  { date: "2025-07-17", patient: "John Doe", doctor: "Dr. Smith", amount: 100, status: "Paid", mode: "Cash" },
  { date: "2025-07-16", patient: "Jane Roe", doctor: "Dr. Brown", amount: 200, status: "Not Paid", mode: "Card" },
  { date: "2025-07-15", patient: "Alice", doctor: "Dr. White", amount: 300, status: "Paid", mode: "Insurance" },
  { date: "2025-07-15", patient: "Alice", doctor: "Dr. White", amount: 300, status: "Paid", mode: "Insurance" },
  
];

const BillsPage = () => {
  const paidBills = sampleBills.filter(bill => bill.status === "Paid");

  return (
    <div className="flex flex-col h-screen">
        <div className="h-16">
           <TopbarAdmin />
        </div>
        <div className="flex flex-1">
        <div className=" bg-white shadow">
           <SidebarAdmin />
         </div>
       
         <div className="flex-1 bg-gray-100 overflow-y-auto px-4 py-3 ">
            <div className="text-sm text-gray-500 flex items-center mt-3">
            <span className="text-gray-400">Dashboard</span>
            <span className="mx-2">/</span>
            <span className="text-blue-600 font-semibold">Bills and Payments</span>
           
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10">
              <SearchBar/>
    
            </div>
             
            <BillsTable bills={paidBills} />
          <div className="flex gap-4 mt-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600">
              Export PDF
            </button>
            <button className="bg-green-700 text-white px-4 py-2 rounded shadow hover:bg-green-800">
              Generate Invoice
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BillsPage;
