import React, { useState } from "react";
import Topbar from "../components/Topbar"; // Using your existing Topbar

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
    phone: "",
    countryCode: "+256",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Registration Successful!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Topbar */}
      <Topbar />

      {/* Main Content */}
      <div className="flex justify-center items-center bg-gray-50 py-10">
        <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-10">
          <h2 className="text-center text-2xl font-semibold mb-6">
            Register Here
          </h2>

          <h3 className="text-lg font-medium mb-4">Basic information</h3>

          {/* Form */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Your first name"
                className="border border-gray-300 rounded w-full p-2"
                required
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Date of birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="border border-gray-300 rounded w-full p-2"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Your last name"
                className="border border-gray-300 rounded w-full p-2"
                required
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Gender <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
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
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Female
                </label>
              </div>
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="border border-gray-300 rounded w-full p-2"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="md:col-span-2 flex gap-2">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2 w-24"
              >
                <option value="+256">+256</option>
                <option value="+254">+254</option>
                <option value="+255">+255</option>
              </select>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="712-345-678"
                className="border border-gray-300 rounded p-2 w-full"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
