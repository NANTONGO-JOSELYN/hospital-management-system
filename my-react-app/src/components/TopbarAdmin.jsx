import { FaBell } from "react-icons/fa";
import health from "../assets/health.png";
import JoImage from "../assets/Jo.jpg";

const TopbarAdmin = () => {
  return (
    <div className="w-full flex justify-between items-center px-6 py-3 bg-blue-500 text-white sticky top-0 z-50 ">
      
      <div className="flex items-center space-x-2">
        <img src={health} alt="City Care Logo" className="w-10 h-10 mt-3"  />
        <h2 className="text-3xl mt-3 font-semi-bold">City Care</h2>

      </div>

      {/* User Info */}
      <div className="flex items-center space-x-20">
        <FaBell className="text-3xl cursor-pointer " />
        <div className="flex items-center space-x-20">
          
            <img src={JoImage} alt="City Care Logo" className="w-10 h-10 rounded-full object-cover " />
      
          <div className="text-right -ml-19 mr-5">
            <p className="font-normal leading">Madrine</p>
            <p className="text-sm font-normal ">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopbarAdmin;
