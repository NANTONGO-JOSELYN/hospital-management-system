import React from "react";
import { useNavigate } from "react-router-dom";
import { CalendarCheck, FileText, MessageCircle } from "lucide-react";
import health from "../../assets/health.png";


const PatientLandingPage = () => {
  const navigate = useNavigate(); // 👈 navigation hook

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-blue-600 text-white flex items-center justify-between px-6 py-4 shadow-md">
        <div className="flex items-center gap-3">
          <img src={health} alt="City Care Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">City Care</h1>
        </div>
    
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-16 gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Welcome, dear patient!
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Manage your health effortlessly — book appointments, view your
            medical history, and stay in touch with your doctor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Navigate to appointment */}
            <button
              onClick={() => navigate("/appointment")}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition"
            >
              <CalendarCheck className="w-5 h-5" />
              Book Appointment
            </button>

            
          </div>
        </div>

    
      </section>
    </div>
  );
};

export default PatientLandingPage;
