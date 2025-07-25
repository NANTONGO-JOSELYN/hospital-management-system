import React from "react";

const ConfirmDialog = ({
  isOpen,
  onCancel,      // ✅ changed from onClose
  onConfirm,
  message = "Are you sure?"
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-sm rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-lg font-semibold mb-4">{message}</h2>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={onCancel}  
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-red-600"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
