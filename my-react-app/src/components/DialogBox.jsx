import React from "react";

const DialogBox = ({ isOpen, onClose, onSave, patientData, setPatientData }) => {
  if (!isOpen) return null;

  const handleChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-opacity-10 flex items-center justify-center z-50">

      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          {patientData?.id ? "Edit Patient" : "Add New Patient"}
        </h2>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstname"
              value={patientData.firstname || ""}
              onChange={handleChange}
              placeholder="First Name"
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastname"
              value={patientData.lastname || ""}
              onChange={handleChange}
              placeholder="Last Name"
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 text-sm font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={patientData.address || ""}
              onChange={handleChange}
              placeholder="Address"
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block mb-1 text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              name="dateofbirth"
              value={patientData.dateofbirth || ""}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>

          {/* Gender Radio Buttons */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium">
              Gender <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={patientData.gender === "Male"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={patientData.gender === "Female"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-1 text-sm font-medium">Phone Number
            <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phonenumber"
              value={patientData.phonenumber || ""}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border border-gray-300 rounded p-2 w-full"
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
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
