import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table";
import SearchBar from "../../components/Search";
import SidebarAdmin from "../../components/SidebarAdmin";
import TopbarAdmin from "../../components/TopbarAdmin";
import DialogBox from "../../components/DialogBox";

const PatientPage = () => {
  const navigate = useNavigate();
  const columns = [
    "First Name",
    "Last Name",
    "Address",
    "Date of Birth",
    "Gender",
    "Phone number",
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
    },
    {
      id: 2,
      firstname: "Mark",
      lastname: "John",
      address: "Ntinda",
      dateofbirth: "10/01/2000",
      gender: "Male",
      phonenumber: "0758000000",
      diagnosis: "Fever",
    },
    // Add more sample patients here if needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState({});

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleRowClick = (patient) => {
    navigate(`/patients/${patient.id}`);
  };

  const openAddDialog = () => {
    setSelectedPatient({});
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    if (selectedPatient.id) {
      setData((prev) =>
        prev.map((p) => (p.id === selectedPatient.id ? selectedPatient : p))
      );
    } else {
      setData((prev) => [
        ...prev,
        { ...selectedPatient, id: prev.length + 1 },
      ]);
    }
    setIsDialogOpen(false);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <TopbarAdmin />
      <div className="flex flex-1 overflow-hidden">
        <SidebarAdmin />
        <div
          className={`p-6 space-y-6 bg-gray-100 flex-1 overflow-y-auto transition-opacity duration-300 ${
            isDialogOpen ? "opacity-50 pointer-events-none select-none" : "opacity-100"
          }`}
        >
          <div className="text-sm text-gray-500 flex items-center">
            <span className="text-gray-400">Dashboard</span>
            <span className="mx-2">/</span>
            <span className="text-blue-600 font-semibold">Patients</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <button
              onClick={openAddDialog}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium"
            >
              <Plus className="w-5 h-5 mr-2" /> Add New
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <Table columns={columns} data={filteredData} onRowClick={handleRowClick} />
          </div>
        </div>
      </div>

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

export default PatientPage;
