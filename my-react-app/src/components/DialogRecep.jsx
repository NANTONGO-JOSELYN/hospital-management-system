import React from "react";

const DialogBox = ({ isOpen, onClose, onSave, formData, setFormData }) => {
  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0  bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          {formData?.id ? "Edit Appointment" : "Book New Appointment"}
        </h2>

        {/* Appointment Form */}
        <div className="grid grid-cols-1 gap-4">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Patient Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="Name"
              value={formData.Name || ""}
              onChange={handleChange}
              placeholder="Enter Patient's Name"
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="Address"
              value={formData.Address || ""}
              onChange={handleChange}
              placeholder="Enter Patient's Address"
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
              name="Date"
              value={formData.Date || ""}
              onChange={handleChange}
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
              name="Phone number"
              value={formData["Phone number"] || ""}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          {/* Time */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Time <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              name="Time"
              value={formData.Time || ""}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          {/* Service */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Service <span className="text-red-500">*</span>
            </label>
            <select
              name="Service"
              value={formData.Service || ""}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            >
              <option value="">Select Service</option>
              <option value="Dental">Dental</option>
              <option value="Consultation">Consultation</option>
              <option value="General Checkup">General Checkup</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-red-500 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
