import React from "react";
import Sidebar from "../../components/SidebarDoctor";
import Topbar from "../../components/Topbar";

function SettingsDoctor() {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation */}
      <Topbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-500 mb-4">
            <span className="text-gray-400">Dashboard</span> /{" "}
            <span className="text-blue-600 font-semibold">Settings</span>
          </div>

          {/* Page Title */}
          

          {/* Settings Form */}
          <div className="bg-white p-6 rounded shadow-md space-y-6 max-w-6xl">
            {/* Account Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Account Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="Dr. Joselyn"
                    className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="doctor@example.com"
                    className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Change Password</label>
                  <input
                    type="password"
                    placeholder="********"
                    className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
              </div>
            </div>

            {/* Notification Preferences */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Notifications</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  <span>Email me about appointment reminders</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  <span>Notify me of schedule changes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  <span>Weekly reports summary</span>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 pt-4 border-t">
              <button className="px-4 py-2 bg-white border rounded hover:bg-gray-100">
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Save Changes
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SettingsDoctor;
