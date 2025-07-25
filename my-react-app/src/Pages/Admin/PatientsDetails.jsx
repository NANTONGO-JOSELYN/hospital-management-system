import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SidebarAdmin from "../../components/SidebarAdmin";
import TopbarAdmin from "../../components/TopbarAdmin";
import DialogBox from "../../components/DialogBox";

const dummyPatients = [
  {
    id: 1,
    firstname: "Josellyn",
    lastname: "Nantongo",
    address: "Kikoni",
    dateofbirth: "09/12/2003",
    gender: "Female",
    phonenumber: "0758211603",
   
  },
  {
    id: 2,
    firstname: "Mark",
    lastname: "John",
    address: "Ntinda",
    dateofbirth: "10/01/2000",
    gender: "Male",
    phonenumber: "0758000000",
   
  },
];

const PatientView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const selected = dummyPatients.find((p) => p.id === parseInt(id));
    if (!selected) return navigate("/patients");
    setPatient(selected);
  }, [id, navigate]);

  const handleEditClick = () => {
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    setIsDialogOpen(false);
  };

  if (!patient) return null;

  return (
    <div className="flex flex-col h-screen">
      <TopbarAdmin />
      <div className="flex flex-1 overflow-hidden">
        <SidebarAdmin />
        <div
          className={`flex-1 p-6 space-y-6 bg-gray-100 overflow-y-auto transition-opacity duration-300 ${
            isDialogOpen ? "opacity-30" : "opacity-100"
          }`}
        >
          <div className="text-sm text-gray-500">
            <span className="text-gray-400">Dashboard</span> /{" "}
            <span className="text-gray-400">Patients</span> /{" "}
            <span className="text-blue-600 font-semibold">
              {patient.firstname} {patient.lastname}
            </span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Patient Details</h2>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Name:</strong> {patient.firstname} {patient.lastname}</li>
              <li><strong>Gender:</strong> {patient.gender}</li>
              <li><strong>Date of Birth:</strong> {patient.dateofbirth}</li>
              <li><strong>Phone Number:</strong> {patient.phonenumber}</li>
              <li><strong>Address:</strong> {patient.address}</li>
              <li><strong>Diagnosis:</strong> {patient.diagnosis}</li>
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

      {/* DialogBox remains above and not dimmed */}
      <DialogBox
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleSave}
        patientData={patient}
        setPatientData={setPatient}
      />
    </div>
  );
};

export default PatientView;
