import React, { useState } from "react";
import { Plus } from "lucide-react";
import Table from "../../components/Table";
import SearchBar from "../../components/Search";
import Sidebar from "../../components/SidebarDoctor";
import Topbar from "../../components/Topbar";
import DialogBox from "../../components/DialogBox"; // import your dialog component

const PatientiPage = () => {
  const columns = [
    "First Name",
    "Last Name",
    "Address",
    "Date of Birth",
    "Gender",
    "Phone number",
    "Diagnosis",
    "Prescription",
  ];

  const [data, setData] = useState([
    {
      id: 1,
      firstname: "Josellyn",
      lastname: "Nantongo",
      address: "Kikoni",
      dateofbirth: "09/12/2003",
      gender: "Female",
      phonenumber: "0758211603",
      diagnosis: "Cough",
      prescription: "Panadol",
    },
    {
      id: 2,
      firstname: "Josellyn",
      lastname: "Nantongo",
      address: "Kikoni",
      dateofbirth: "09/12/2003",
      gender: "Female",
      phonenumber: "0758211603",
      diagnosis: "Cough",
      prescription: "Panadol",
    },
    {
      id: 3,
      firstname: "Josellyn",
      lastname: "Nantongo",
      address: "Kikoni",
      dateofbirth: "09/12/2003",
      gender: "Female",
      phonenumber: "0758211603",
      diagnosis: "Cough",
      prescription: "Panadol",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState({});

  // Filter data by search term
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Open dialog for adding new patient
  const openAddDialog = () => {
    setSelectedPatient({}); // clear selected patient for new entry
    setIsDialogOpen(true);
  };

  // Open dialog for editing (if you want to implement editing)
  const openEditDialog = (patient) => {
    setSelectedPatient(patient);
    setIsDialogOpen(true);
  };

  // Save handler for dialog
  const handleSave = () => {
    if (selectedPatient.id) {
      // Editing existing patient
      setData((prev) =>
        prev.map((p) => (p.id === selectedPatient.id ? selectedPatient : p))
      );
    } else {
      // Adding new patient - assign a new id
      setData((prev) => [
        ...prev,
        { ...selectedPatient, id: prev.length + 1 },
      ]);
    }
    setIsDialogOpen(false);
  };

  // Close dialog
  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div
          className={`p-6 space-y-6 bg-gray-100 flex-1 overflow-y-auto transition-opacity duration-300 ${
            isDialogOpen ? "opacity-50 pointer-events-none select-none" : "opacity-100"
          }`}
        >
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-500 flex items-center">
            <span className="text-gray-400">Dashboard</span>
            <span className="mx-2">/</span>
            <span className="text-blue-600 font-semibold">Patients</span>
          </div>

          {/* Header Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <SearchBar value={searchTerm} onChange={setSearchTerm} className="w-full sm:w-auto" />
            <button
              onClick={openAddDialog}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium w-full sm:w-auto"
            >
              <Plus className="w-5 h-5 mr-2" /> Add New
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-md">
            <Table
              columns={columns}
              data={filteredData}
              onRowClick={openEditDialog}
            />
          </div>
        </div>
      </div> this is my patient view page 

      {/* DialogBox */}
      <DialogBox
        isOpen={isDialogOpen}
        onClose={handleClose}
        onSave={handleSave}
        patientData={selectedPatient}
        setPatientData={setSelectedPatient}
      />
    </div>
  );
};

export default PatientiPage; 
