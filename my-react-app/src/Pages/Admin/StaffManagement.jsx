import React, { useState } from "react";
import { Plus } from "lucide-react";
import TableStaff from "../../components/TableStaff";
import Search from "../../components/Search";
import SidebarAdmin from "../../components/SidebarAdmin"; 
import TopbarAdmin from "../../components/TopbarAdmin";
import DialogBoxStaff from "../../components/DialogBoxStaff";
import ConfirmDialog from "../../components/ConfirmDialog"; 
import { Pencil, Trash2 } from "lucide-react";
const StaffPage = () => {
  const columns = ["Name", "Email", "Phone Number", "Role", "Action"];

  const [data, setData] = useState([
    {
      id: 1,
      name: "Joselyn Nantongo",
      email: "joselyn@example.com",
      phonenumber: "0758211603",
      role: "Doctor",
    },
    {
      id: 2,
      name: "Mark Ssenyonga",
      email: "mark@example.com",
      phonenumber: "0700123456",
      role: "Nurse",
    },
    {
      id: 3,
      name: "Mark Ssenyonga",
      email: "mark@example.com",
      phonenumber: "0700123456",
      role: "Nurse",
    },
    {
      id: 4,
      name: "Mark Ssenyonga",
      email: "mark@example.com",
      phonenumber: "0700123456",
      role: "Nurse",
    },
    {
      id: 5,
      name: "Mark Ssenyonga",
      email: "mark@example.com",
      phonenumber: "0700123456",
      role: "Nurse",
    },
    {
      id: 6,
      name: "Mark Ssenyonga",
      email: "mark@example.com",
      phonenumber: "0700123456",
      role: "Nurse",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState({});
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const openAddDialog = () => {
    setSelectedStaff({});
    setIsDialogOpen(true);
  };

  const openEditDialog = (staff) => {
    setSelectedStaff(staff);
    setIsDialogOpen(true);
  };

  const confirmDelete = (staff) => {
    setDeleteTarget(staff);
    setIsConfirmOpen(true);
  };
  const handleCancelDelete = () => {
    setIsConfirmOpen(false);
    setDeleteTarget(null);
  };

  const handleDelete = () => {
    if (deleteTarget) {
      setData((prev) => prev.filter((staff) => staff.id !== deleteTarget.id));
      setDeleteTarget(null);
      setIsConfirmOpen(false);
    }
  };

  const handleSave = () => {
    if (selectedStaff.id) {
      setData((prev) =>
        prev.map((s) => (s.id === selectedStaff.id ? selectedStaff : s))
      );
    } else {
      setData((prev) => [
        ...prev,
        { ...selectedStaff, id: prev.length + 1 },
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
        
        {/* Wrap page content here */}
        <div
          className={`p-6 space-y-4 bg-gray-100 flex-1 overflow-y-auto transition-opacity duration-300 ${
            isDialogOpen || isConfirmOpen ? "opacity-50 pointer-events-none select-none" : "opacity-100"
          }`}
        >
          <div className="text-sm text-gray-500">
            <span className="text-gray-400">Dashboard</span> /{' '}
            <span className="text-blue-600 font-semibold">Staff</span>
          </div>
  
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Search value={searchTerm} onChange={setSearchTerm} />
            <button
              onClick={openAddDialog}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium"
            >
              <Plus className="w-5 h-5 mr-2" /> Add New
            </button>
          </div>
  
          <div className="bg-white rounded-lg">
            <TableStaff
              columns={columns}
              data={filteredData.map((staff) => ({
                ...staff,
                Action: (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => openEditDialog(staff)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => confirmDelete(staff)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )
              }))}
              onRowClick={openEditDialog}
            />
          </div>
        </div>
      </div>
  
      <DialogBoxStaff
        isOpen={isDialogOpen}
        onClose={handleClose}
        onSave={handleSave}
        staffData={selectedStaff}
        setStaffData={setSelectedStaff}
      />
  
      <ConfirmDialog
        isOpen={isConfirmOpen}
        title="Delete Staff Member"
        message={
          <span className="font-bold text-sm">
            Are you sure you want to delete {deleteTarget?.name}?
          </span>
        }
        onCancel={handleCancelDelete}
        onConfirm={handleDelete}
      />
    </div>
  );
  
};

export default StaffPage;
