// src/pages/MedicalRecordsPage.jsx
import React, { useState } from "react";
import { Plus } from "lucide-react";
import Table from "../../components/Table";
import SearchBar from "../../components/Search";
import SidebarAdmin from "../../components/SidebarAdmin";
import TopbarAdmin from "../../components/TopbarAdmin";
import DialogBoxMed from "../../components/DialogBoxmed";
import { useNavigate } from "react-router-dom";

const MedicalRecordsPage = () => {
  const navigate = useNavigate();

  const columns = [
    "Patient Name",
    "Phone Number",
    "Doctor Name",
    "Date",
    "Diagnosis",
    "Prescription",
  ];

  const [data, setData] = useState([
    {
      id: 1,
      patientname: "Joselyn Nantongo",
      phonenumber: "0758211603",
      doctorname: "Dr. Marl",
      date: "2023-09-12",
      diagnosis: "Cough",
      prescription: "Panadol",
    },
    {
      id: 2,
      patientname: "John",
      phonenumber: "0700123456",
      doctorname: "Dr. Adams",
      date: "2023-09-10",
      diagnosis: "Cold",
      prescription: "Amoxicillin",
    },
    {
      id: 3,
      patientname: "Jane",
      phonenumber: "0789456123",
      doctorname: "Dr. Lee",
      date: "2023-09-08",
      diagnosis: "Flu",
      prescription: "Ibuprofen",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState({});

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const openAddDialog = () => {
    setSelectedRecord({});
    setIsDialogOpen(true);
  };

  const openEditDialog = (record) => {
    navigate(`/medicalrecords/${record.id}`, { state: record });
  };

  const handleSave = () => {
    if (selectedRecord.id) {
      setData((prev) =>
        prev.map((r) => (r.id === selectedRecord.id ? selectedRecord : r))
      );
    } else {
      setData((prev) => [
        ...prev,
        { ...selectedRecord, id: prev.length + 1 },
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
      <div className="flex flex-1">
        <SidebarAdmin />

        <div
          className={`p-6 space-y-6 bg-gray-100 flex-1 overflow-y-auto transition-opacity duration-300 ${
            isDialogOpen ? "opacity-50" : "opacity-100"
          }`}
        >
          <div className="text-sm text-gray-500">
            <span className="text-gray-400">Dashboard</span> /{" "}
            <span className="text-blue-600 font-semibold">Medical Records</span>
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

          <div className="bg-white rounded-lg">
            <Table
              columns={columns}
              data={filteredData}
              onRowClick={openEditDialog}
            />
          </div>
        </div>
      </div>

      <DialogBoxMed
        isOpen={isDialogOpen}
        onClose={handleClose}
        onSave={handleSave}
        recordData={selectedRecord}
        setRecordData={setSelectedRecord}
      />
    </div>
  );
};

export default MedicalRecordsPage;
