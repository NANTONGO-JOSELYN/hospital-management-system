// src/pages/MedicalRecordView.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SidebarAdmin from "../../components/SidebarAdmin";
import TopbarAdmin from "../../components/TopbarAdmin";
import DialogBoxMed from "../../components/DialogBoxmed";

const dummyRecords = [
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
    patientname: "Mark John",
    phonenumber: "0758000000",
    doctorname: "Dr. Sarah",
    date: "2023-07-05",
    diagnosis: "Fever",
    prescription: "Paracetamol",
  },
];

const MedicalRecordView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [record, setRecord] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const selected = dummyRecords.find((r) => r.id === parseInt(id));
    if (!selected) return navigate("/medicalrecords");
    setRecord(selected);
  }, [id, navigate]);

  const handleEditClick = () => {
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    setIsDialogOpen(false);
    // Optionally update dummyRecords or local storage if needed
  };

  if (!record) return null;

  return (
    <div className="flex flex-col h-screen">
      <TopbarAdmin />
      <div className="flex flex-1 overflow-hidden">
        <SidebarAdmin />
        <div className="flex-1 p-6 space-y-6 bg-gray-100 overflow-y-auto">
          <div className="text-sm text-gray-500">
            <span className="text-gray-400">Dashboard</span> /{" "}
            <span className="text-gray-400">Medical Records</span> /{" "}
            <span className="text-blue-600 font-semibold">
              {record.patientname}
            </span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
              Patient Record Details
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Patient Name:</strong> {record.patientname}
              </li>
              <li>
                <strong>Phone Number:</strong> {record.phonenumber}
              </li>
              <li>
                <strong>Doctor Name:</strong> {record.doctorname}
              </li>
              <li>
                <strong>Date:</strong> {record.date}
              </li>
              <li>
                <strong>Diagnosis:</strong> {record.diagnosis}
              </li>
              <li>
                <strong>Prescription:</strong> {record.prescription}
              </li>
            </ul>

            <button
              onClick={handleEditClick}
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <DialogBoxMed
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleSave}
        recordData={record}
        setRecordData={setRecord}
      />
    </div>
  );
};

export default MedicalRecordView;
