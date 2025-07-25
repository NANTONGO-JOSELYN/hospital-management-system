import React from "react";

const DialogBoxMed = ({ isOpen, onClose, onSave, recordData, setRecordData }) => {
  if (!isOpen) return null;

  const handleChange = (e) => {
    setRecordData({ ...recordData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0  bg-opacity-30 flex items-center justify-center z-50">

      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          {recordData?.id ? "Edit Medical Record" : "Add New Medical Record"}
        </h2>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Patient Name */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium">
              Patient Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="patientname"
              value={recordData.patientname || ""}
              onChange={handleChange}
              placeholder="Patient Name"
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phonenumber"
              value={recordData.phonenumber || ""}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          {/* Doctor Name */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Doctor Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="doctorname"
              value={recordData.doctorname || ""}
              onChange={handleChange}
              placeholder="Doctor Name"
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          {/* Date */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="date"
              value={recordData.date || ""}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          {/* Prescription */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium">
              Prescription <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="prescription"
              value={recordData.prescription || ""}
              onChange={handleChange}
              placeholder="Prescription"
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium">
              Diagnosis <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="prescription"
              value={recordData.prescription || ""}
              onChange={handleChange}
              placeholder="Prescription"
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-red-600"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBoxMed;
