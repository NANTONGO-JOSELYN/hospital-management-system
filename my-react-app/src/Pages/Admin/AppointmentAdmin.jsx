import React, { useState } from "react";
import TableReceptionist from "../../components/TableReceptionist"; 
import SidebarAdmin from "../../components/SidebarAdmin";
import TopbarAdmin from "../../components/TopbarAdmin";
import DialogBox from "../../components/DialogRecep"; 

const AppointmentAdmin = () => {
  const columns = ["Name", "Address", "Date", "Phone number", "Time", "Service"];

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      Name: "John ",
      Address: "Kampala",
      Date: "2025-07-17",
      "Phone number": "0701234567",
      Time: "10:00 AM",
      Service: "Dental",
    },
    {
        id: 2,
        Name: "John ",
        Address: "Kampala",
        Date: "2025-07-17",
        "Phone number": "0701234567",
        Time: "10:00 AM",
        Service: "Dental",
      },

      {
        id: 3,
        Name: "John ",
        Address: "Kampala",
        Date: "2025-07-17",
        "Phone number": "0701234567",
        Time: "10:00 AM",
        Service: "Dental",
      },
    
      {
        id: 4,
        Name: "John ",
        Address: "Kampala",
        Date: "2025-07-17",
        "Phone number": "0701234567",
        Time: "10:00 AM",
        Service: "Dental",
      },

      {
        id: 5,
        Name: "John ",
        Address: "Kampala",
        Date: "2025-07-17",
        "Phone number": "0701234567",
        Time: "10:00 AM",
        Service: "Dental",
      },
      {
        id: 6,
        Name: "John ",
        Address: "Kampala",
        Date: "2025-07-17",
        "Phone number": "0701234567",
        Time: "10:00 AM",
        Service: "Dental",
      },
       
      {
        id: 7,
        Name: "John",
        Address: "Kampala",
        Date: "2025-07-17",
        "Phone number": "0701234567",
        Time: "10:00 AM",
        Service: "Dental",
      },

      {
        id: 8,
        Name: "John",
        Address: "Kampala",
        Date: "2025-07-17",
        "Phone number": "0701234567",
        Time: "10:00 AM",
        Service: "Dental",
      },
  ]);



  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    Name: "",
    Address: "",
    Date: "",
    "Phone number": "",
    Time: "",
    Service: "",
  });

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleSave = () => {
    setAppointments((prev) => [
      ...prev,
      { ...newAppointment, id: prev.length + 1 },
    ]);
    setNewAppointment({
      Name: "",
      Address: "",
      Date: "",
      "Phone number": "",
      Time: "",
      Service: "",
    });
    closeDialog();
  };

  return (
    <div className="flex flex-col h-screen">
      <TopbarAdmin />
      <div className="flex flex-1">
        <SidebarAdmin />

        {/* Main content with conditional opacity */}
        <div
          className={`p-6 bg-gray-100 flex-1 transition-opacity duration-300 ${
            isDialogOpen ? "opacity-50 pointer-events-none select-none" : "opacity-100"
          }`}
        >
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            <span className="text-gray-400">Dashboard</span> /{" "}
            <span className="text-blue-600 font-semibold">Appointments</span>
          </div>

          {/* Book Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={openDialog}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Book Appointment
            </button>
          </div>

          {/* Appointments Table */}
          <div className="bg-white rounded-lg shadow-md">
            <TableReceptionist columns={columns} data={appointments} />
          </div>
        </div>
      </div>

      {/* Dialog Box */}
      <DialogBox
        isOpen={isDialogOpen}
        onClose={closeDialog}
        onSave={handleSave}
        formData={newAppointment}
        setFormData={setNewAppointment}
      />
    </div>
  );
};

export default AppointmentAdmin;
