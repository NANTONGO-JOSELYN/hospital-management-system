import React from "react";
import Sidebar from "../../components/SidebarDoctor";
import Topbar from "../../components/Topbar";

function Appointment() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <Topbar />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-500 mb-4">
            <span className="text-gray-400">Dashboard</span> /{" "}
            <span className="text-blue-600 font-semibold">Appointments</span>
          </div>

          {/* Title and Filters */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold text-blue-600">Joselyn</h2>
              <p className="text-sm text-gray-600">2025</p>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <button className="px-3 py-1 border rounded bg-white hover:bg-gray-100">Today</button>
              <button className="px-2 py-1 border rounded bg-white hover:bg-gray-100">&lt;</button>
              <button className="px-2 py-1 border rounded bg-white hover:bg-gray-100">&gt;</button>
              <div className="flex items-center gap-2">
                <button className="px-2 py-1 border rounded bg-white hover:bg-blue-100">Name</button>
                <button className="px-2 py-1 border rounded bg-white hover:bg-blue-100">Priority</button>
                <button className="px-2 py-1 border rounded bg-white hover:bg-blue-100">Deadline</button>
              </div>
            </div>
          </div>

          {/* Calendar Header */}
          <div className="grid grid-cols-8 text-sm font-medium text-gray-600 bg-gradient-to-r from-slate-50 to-slate-100 rounded-t-md border border-gray-200">
            <div className="py-3 px-4 border-r text-center">GMT+3</div>
            {["MON", "TUE", "WED", "THU", "FRI", "SAT"].map(day => (
              <div key={day} className="py-3 px-4 border-r text-center">{day}</div>
            ))}
          </div>

          {/* Calendar Grid */}
          {["09 AM", "10 AM", "11 AM", "12 PM"].map((hour, i) => (
            <div key={hour} className="grid grid-cols-8 border-x border-b border-gray-200 min-h-[100px] bg-white">
              {/* Time Label */}
              <div className="p-4 text-sm font-medium text-gray-500 border-r">{hour}</div>

              {/* Appointment Cells */}
              {[...Array(6)].map((_, j) => (
                <div key={j} className="relative border-r min-h-[100px] p-2 hover:bg-blue-50 transition">
                  {(i === 0 && j === 0) && (
                    <div className="absolute inset-1 bg-purple-100 border border-purple-400 text-xs rounded-md p-2 shadow-sm">
                      <p className="font-bold">APT-22302481</p>
                      <p className="text-gray-700">GO</p>
                      <p className="text-gray-500">09 AM - 10 AM</p>
                    </div>
                  )}
                  {(i === 0 && j === 1) && (
                    <div className="absolute inset-1 bg-yellow-100 border border-yellow-400 text-xs rounded-md p-2 shadow-sm">
                      <p className="font-bold">APT-2230387</p>
                      <p className="text-gray-700">GO</p>
                      <p className="text-gray-500">09 AM - 09:40 AM</p>
                    </div>
                  )}
                  {(i === 1 && j === 0) && (
                    <div className="absolute inset-1 bg-blue-100 border border-blue-400 text-xs rounded-md p-2 shadow-sm">
                      <p className="font-bold">APT-2230387</p>
                      <p className="text-gray-700">GO</p>
                      <p className="text-gray-500">10 AM - 10:40 AM</p>
                    </div>
                  )}
                  {(i === 2 && j === 2) && (
                    <div className="absolute inset-1 bg-red-100 border border-red-400 text-xs rounded-md p-2 shadow-sm">
                      <p className="font-bold">APT-2230387</p>
                      <p className="text-gray-700">GO</p>
                      <p className="text-gray-500">11 AM - 12 PM</p>
                    </div>
                  )}
                  {(i === 3 && j === 3) && (
                    <div className="absolute inset-1 bg-green-100 border border-green-400 text-xs rounded-md p-2 shadow-sm">
                      <p className="font-bold">APT-2230387</p>
                      <p className="text-gray-700">GO</p>
                      <p className="text-gray-500">12 PM - 1 PM</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}

          {/* Appointment Status & Actions */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex space-x-4 text-sm">
              <span className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span>Completed</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span>Reschedule</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                <span>Confirm</span>
              </span>
            </div>

            <div className="space-x-2">
              <button className="px-4 py-1 border rounded bg-white hover:bg-gray-100 text-sm">Cancel</button>
              <button className="px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 text-sm">Save</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Appointment;
