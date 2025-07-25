import { FaBell } from "react-icons/fa";
import health from "../assets/health.png";

const TopbarPatient = () => {
  return (
    <div className="w-full flex justify-between items-center px-6 py-3 bg-blue-500 text-white sticky top-0 z-50 relative">
      
      {/* Bell Icon (left-aligned) */}
      

      {/* Centered Logo and Text */}
      <div className="flex flex-col items-center mx-auto">
        <img src={health} alt="City Care Logo" className="w-10 h-10" />
        <h2 className="text-3xl font-semibold mt-1">City Care</h2>
      </div>
    </div>
  );
};

export default TopbarPatient;
