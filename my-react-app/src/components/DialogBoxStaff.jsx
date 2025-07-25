import React from "react";

const DialogBoxStaff = ({ isOpen, onClose, onSave, staffData, setStaffData }) => {
  if (!isOpen) return null;

  const handleChange = (e) => {
    setStaffData({ ...staffData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          {staffData?.id ? "Edit Staff Member" : "Add New Staff Member"}
        </h2>

        {/* Staff Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Name */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={staffData.name || ""}
              onChange={handleChange}
              placeholder="Full Name"
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={staffData.email || ""}
              onChange={handleChange}
              placeholder="Email Address"
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
              type="tel"
              name="phone"
              value={staffData.phone || ""}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          {/* Role */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium">
              Role <span className="text-red-500">*</span>
            </label>
            <select
              name="role"
              value={staffData.role || ""}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            >
              <option value="">Select Role</option>
              <option value="Doctor">Doctor</option>
              <option value="Nurse">Nurse</option>
              <option value="Receptionist">Receptionist</option>
              <option value="Admin">Admin</option>
            </select>
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

export default DialogBoxStaff;
