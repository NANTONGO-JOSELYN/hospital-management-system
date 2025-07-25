import React, { useState } from "react";
import SidebarReceptionist from "../../components/SidebarReceptionist";
import TopbarReceptionist from "../../components/TopbarReceptionist";

const BillsPaymentPage = () => {
  const [patientName, setPatientName] = useState("");
  const [services, setServices] = useState([{ description: "", amount: "" }]);
  const [paymentMode, setPaymentMode] = useState("Cash");

  const handleServiceChange = (index, field, value) => {
    const updated = [...services];
    updated[index][field] = value;
    setServices(updated);
  };

  const addService = () => {
    setServices([...services, { description: "", amount: "" }]);
  };

  const totalAmount = services.reduce((sum, item) => {
    return sum + (parseFloat(item.amount) || 0);
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const billData = {
      patientName,
      services,
      totalAmount,
      paymentMode,
    };
    console.log("Bill submitted:", billData);
    alert("Bill Generated Successfully!");
    // Add your API submission logic here
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Fixed Topbar */}
      <div className="h-16 w-full fixed top-0 z-50">
        <TopbarReceptionist />
      </div>

      {/* Content below topbar */}
      <div className="flex flex-1 pt-16 " >
        {/* Sidebar below topbar */}
        <div className=" bg-white shadow h-[calc(100vh-4rem)]">
          <SidebarReceptionist />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto ml-30           ">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Generate Bill</h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-xl p-6 max-w-3xl space-y-6"
          >
            {/* Patient Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Patient Name 
              </label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Services List */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Services Rendered
              </label>
              {services.map((service, index) => (
                <div key={index} className="flex gap-3 mb-3">
                  <input
                    type="text"
                    placeholder="Description"
                    value={service.description}
                    onChange={(e) =>
                      handleServiceChange(index, "description", e.target.value)
                    }
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Amount"
                    value={service.amount}
                    onChange={(e) =>
                      handleServiceChange(index, "amount", e.target.value)
                    }
                    className="w-32 border border-gray-300 rounded-lg px-4 py-2"
                    required
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={addService}
                className="text-blue-600 hover:underline text-sm mt-2"
              >
                + Add another service
              </button>
            </div>

            {/* Total */}
            <div className="text-right text-lg font-semibold text-gray-800">
              Total: UGX {totalAmount.toLocaleString()}
            </div>

            {/* Payment Mode */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Mode
              </label>
              <select
                value={paymentMode}
                onChange={(e) => setPaymentMode(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              >
                <option value="Cash">Cash</option>
                <option value="Insurance">Insurance</option>
                <option value="Card">Card</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Generate Bill
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default BillsPaymentPage;
