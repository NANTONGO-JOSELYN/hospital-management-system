import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logoutrecep() {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: Clear user session (e.g., token, localStorage)
    localStorage.removeItem("userToken");

    // Redirect after 2 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-center">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">Logged Out</h1>
        <p className="text-gray-600 mb-6">You have been successfully logged out.</p>
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Login Again
        </button>
      </div>
    </div>
  );
}

export default Logoutrecep;
