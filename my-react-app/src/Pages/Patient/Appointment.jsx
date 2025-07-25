import React, { useEffect, useState } from 'react';
import Topbarpatient from '../../components/TopbarPatient';



function Appointmentpatient() {
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isBooked, setIsBooked] = useState(false);
      const times = [

    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"
  ];


      useEffect(() => {
    // Add background when component mounts
    document.body.classList.add('appointment-body');
    
    // Clean up on unmount
    return () => {
      document.body.classList.remove('appointment-body');
    };
  }, []);
  return (
    // In your Appointment page component
    <div className="relative">
      {/* Header Component */}
      <Topbarpatient />

      {/* Main Content */}

      <div className="w-full flex items-center bg-gray h-screen">
        <div className="rounded-2xl bg-white  w-full justify-center w- h-9/12 max-w-screen-x1  p-10">
          {!isBooked ? (
            <div className="make-appointment">
              <h1 className="text-3xl font-bold text-blue-700 mb-6 ml-120">
                Make your Appointment
              </h1>
              {/* Appointment form content */}
              <div className="appointment-form">
                <form className="p-6 bg-white rounded-lg shadow space-y-12">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-15 text-left">
                    {/* Telephone Number */}
                    <div className="text-left">
                      <p className="mb-2">Telephone Number *</p>
                      <div className="flex">
                        {/* Country Code Dropdown */}
                        <button
                          type="button"
                          className="shrink-0 inline-flex items-center px-4 py-2 border border-gray-300 rounded-l-lg bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        >
                          <span className="mr-2"></span>
                          +256
                          <svg
                            className="w-3 h-3 ml-2"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>

                        {/* Phone Input */}
                        <input
                          type="tel"
                          className="w-full px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                          placeholder="777-000-000"
                          required
                        />
                      </div>
                    </div>

                    {/* Service Dropdown */}

                    <div className="relative item-center">
                      <p className="mb-2">Service *</p>
                      <select
                        id="departments"
                        value={selectedValue}
                        onChange={(e) => setSelectedValue(e.target.value)}
                        className={`w-60 px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none ${
                          selectedValue === ""
                            ? "text-gray-400"
                            : "text-gray-900"
                        }`}
                        required
                      >
                        <option value="" disabled className="text-gray-400">
                          select the sevice
                        </option>
                        <option value="1" className="text-gray-900">
                          Emergency Medicine
                        </option>
                        <option value="2" className="text-gray-900">
                          Cardiology
                        </option>
                        <option value="3" className="text-gray-900">
                          Pediatrics
                        </option>
                        <option value="4" className="text-gray-900">
                          Orthopedics
                        </option>
                        <option value="5" className="text-gray-900">
                          Neurology
                        </option>
                        <option value="6" className="text-gray-900">
                          Oncology
                        </option>
                        <option value="7" className="text-gray-900">
                          Obstetrics & Gynecology
                        </option>
                        <option value="8" className="text-gray-900">
                          General Surgery
                        </option>
                        <option value="9" className="text-gray-900">
                          Radiology
                        </option>
                        <option value="10" className="text-gray-900">
                          Anesthesiology
                        </option>
                        <option value="11" className="text-gray-900">
                          Intensive Care Unit (ICU)
                        </option>
                        <option value="12" className="text-gray-900">
                          Pathology
                        </option>
                        <option value="13" className="text-gray-900">
                          Physical Therapy
                        </option>
                        <option value="14" className="text-gray-900">
                          Pharmacy
                        </option>
                        <option value="15" className="text-gray-900">
                          Laboratory
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-70 top-8 flex items-center pr-3 text-gray-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 10 6">
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 mb-2">Service</label>
          <select
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Select a service</option>
            <option>General Consultation</option>
            <option>Dental Checkup</option>
            <option>Lab Test</option>
            <option>Maternity</option>
          </select>
        </div> */}
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    {/* Reason for Visit */}
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Reason for Visit
                      </label>
                      <textarea
                        placeholder="Reason for your visit"
                        rows={9}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      ></textarea>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Preferred Date
                      </label>
                     
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Preferred Time
                      </label>
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-60 border px-4 py-2 border-gray-300 rounded-lg text-left bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <span
                          className={
                            selectedTime ? "text-black" : "text-gray-400"
                          }
                        >
                          {selectedTime || "Select preferred time"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="absolute mt-1 z-0 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                          <div className="grid grid-cols-3 gap-2 p-2">
                            {times.map((time) => (
                              <div
                                key={time}
                                onClick={() => {
                                  setSelectedTime(time);
                                  setIsOpen(false);
                                }}
                                className="cursor-pointer px-2 py-1 rounded-lg hover:bg-blue-400  hover:text-blue-50  text-sm"
                              >
                                {time}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* <input
                    type="time"
                    className="w-60 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  /> */}
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setIsBooked(true)}
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ) : (
            <div className="appointment-booked">
              <div className=" text-center py-10">
              <div className="flex items-center justify-center h-full">
                 <span className="text-white text-4xl bg-green-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                                          ✔
                                 </span>
                                </div>

                <h2 className="text-3xl font-bold mb-4 mt-36">
                
                      Appointment booked Successfully!
                </h2>
                <div className="flex justify-center mb-4 space-x-2">
                  <p className="text-gray-500">Appointment ID.</p>{" "}
                  <p className="font-semibold">APT-20251403-001</p>
                </div>
                <h2 className="text-xl font-bold mb-4">
                  {" "}
                  Thur, 15 May, 2:30 PM
                </h2>

      

                
                
              </div>
               <div className="absolute mt-30 right-4">
               <button
  onClick={() => navigate("/landing")}
  type="button"
  className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xl px-20 py-2.5 text-center me-2 mb-2"
>
  Back to Home
</button>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Appointmentpatient;