import React, { useState } from "react";
import { Plus } from "lucide-react";
import Table from "../../components/Table";
import Search from "../../components/Search";
import Sidebar from "../../components/SidebarDoctor";
import Topbar from "../../components/Topbar";
import DialogBoxMed from "../../components/DialogBoxmed";

const MedicalRecordsPage = () => {
  const columns = [
    "Patient Name",
    "Phone Number",
    "Doctor Name",
    "Date",
    "diagnosis",
    "Prescription",
    
  ];

  const [data, setData] = useState([
    {
      id: 1,
      patientname: "Josellyn Nantongo",
      phonenumber: "0758211603",
      doctorname: "Dr. Smith",
      date: "2023-09-12",
      diagnosis:"Cough",
      prescription: "Panadol",
     
    },
    {
      id: 2,
      patientname: "John Doe",
      phonenumber: "0700123456",
      doctorname: "Dr. Adams",
      date: "2023-09-10",
      diagnosis:"Cough",
      prescription: "Amoxicillin",

    },
    {
      id: 3,
      patientname: "Jane Smith",
      phonenumber: "0789456123",
      doctorname: "Dr. Lee",
      date: "2023-09-08",
      diagnosis:"Cough",
      prescription: "Ibuprofen",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState({});

  // Filter data by search term
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Open dialog to add new medical record
  const openAddDialog = () => {
    setSelectedRecord({}); // clear selected record for new entry
    setIsDialogOpen(true);
  };

  // Open dialog to edit medical record
  const openEditDialog = (record) => {
    setSelectedRecord(record);
    setIsDialogOpen(true);
  };

  // Save handler for dialog
  const handleSave = () => {
    if (selectedRecord.id) {
      // Editing existing record
      setData((prev) =>
        prev.map((r) => (r.id === selectedRecord.id ? selectedRecord : r))
      );
    } else {
      // Adding new record - assign new id
      setData((prev) => [
        ...prev,
        { ...selectedRecord, id: prev.length + 1 },
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
      <div className="flex flex-1">
        <Sidebar />

        <div
          className={`p-6 space-y-6 bg-gray-100 flex-1 overflow-y-auto transition-opacity duration-300 ${
            isDialogOpen ? "opacity-50 pointer-events-none select-none" : "opacity-100"
          }`}
        >
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-500">
            <span className="text-gray-400">Dashboard</span> /{" "}
            <span className="text-blue-600 font-semibold">Medical Records</span>
          </div>

          {/* Header Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Search value={searchTerm} onChange={setSearchTerm} />
            <button
              onClick={openAddDialog}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium"
            >
              <Plus className="w-5 h-5 mr-2" /> Add New
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg">
            <Table
              columns={columns}
              data={filteredData}
              onRowClick={openEditDialog}
            />
          </div>
        </div>
      </div>

      {/* DialogBox */}
      <DialogBoxMed
        isOpen={isDialogOpen}
        onClose={handleClose}
        onSave={handleSave}
        recordData={selectedRecord} // you might want to rename this prop in DialogBox to e.g. recordData
        setRecordData={setSelectedRecord} // likewise
      />
    </div>
  );
};

export default MedicalRecordsPage;
