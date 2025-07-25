import React, { useState } from "react";
import { Plus, Pencil } from "lucide-react";
import TableReceptionist from "../../components/TableReceptionist";
import SearchBar from "../../components/Search";
import SidebarReceptionist from "../../components/SidebarReceptionist";
import TopbarReceptionist from "../../components/TopbarReceptionist";
import DialogBox from "../../components/DialogBox";

const PatientReceptionistPage = () => {
  const columns = ["FirstName", "LastName", "Address", "DateOfBirth", "PhoneNumber", "Action"];

  const [data, setData] = useState([
    {
      id: 1,
      FirstName: "Joselyn",
      LastName: "Josie",
      Address: "Kikoni",
      DateOfBirth: "1995-06-10",
      PhoneNumber: "0758211603",
    },
    {
      id: 2,
      FirstName: "John",
      LastName: "Doe",
      Address: "Kampala",
      DateOfBirth: "1990-05-12",
      PhoneNumber: "0701234567",
    },
    {
      id: 3,
      FirstName: "Mary",
      LastName: "Ann",
      Address: "Ntinda",
      DateOfBirth: "1992-03-21",
      PhoneNumber: "0789123456",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState("add"); // "add" | "edit" | "view"
  const [selectedPatient, setSelectedPatient] = useState({});
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  // Filter patients based on search term
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const openAddDialog = () => {
    setSelectedPatient({});
    setDialogMode("add");
    setIsDialogOpen(true);
  };

  const openEditDialog = (patient) => {
    setSelectedPatient(patient);
    setDialogMode("edit");
    setIsDialogOpen(true);
  };

  const openViewDialog = (patient) => {
    setSelectedPatient(patient);
    setDialogMode("view");
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    if (selectedPatient.id) {
      // Update existing patient
      setData((prev) =>
        prev.map((p) => (p.id === selectedPatient.id ? selectedPatient : p))
      );
    } else {
      // Add new patient
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
      <TopbarReceptionist />
      <div className="flex flex-1">
        <SidebarReceptionist />

        {/* Page content */}
        <div
          className={`p-6 space-y-4 bg-gray-100 flex-1 overflow-y-auto transition-opacity duration-300 ${
            isDialogOpen || isConfirmOpen
              ? "opacity-50 pointer-events-none select-none"
              : "opacity-100"
          }`}
        >
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500">
            <span className="text-gray-400">Dashboard</span> /{" "}
            <span className="text-blue-600 font-semibold">Patient</span>
          </div>

          {/* Search + Add Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <button
              onClick={openAddDialog}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium"
            >
              <Plus className="w-5 h-5 mr-2" /> Add New
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-md">
            <TableReceptionist
              columns={columns}
              data={filteredData.map((patient) => ({
                ...patient,
                Action: (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => openEditDialog(patient)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                  </div>
                ),
              }))}
              onRowClick={(row) => openViewDialog(row)} 
            />
          </div>
        </div>
      </div>

      {/* Dialog for Add/Edit/View */}
      <DialogBox
        isOpen={isDialogOpen}
        onClose={handleClose}
        onSave={handleSave}
        patientData={selectedPatient}
        setPatientData={setSelectedPatient}
        mode={dialogMode} // 👈 pass mode
      />
    </div>
  );
};

export default PatientReceptionistPage;
