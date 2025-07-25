import { NavLink } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaClipboardList, FaCog, FaSignOutAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const SidebarDoctor = () => {
  return (
    <div className="w-50 bg-white shadow-lg flex flex-col h-full">

      <nav className="mt-10 flex-1">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/doctor/dashboard"
              className={({ isActive }) =>
                `flex items-center px-6 py-2 cursor-pointer ${
                  isActive
                    ? "text-blue-600 font-semibold bg-blue-100 "
                    : "hover:bg-gray-100"
                }`
              }
            >
              <MdDashboard className="mr-3" /> Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/doctor/patients"
              className={({ isActive }) =>
                `flex items-center px-6 py-2 cursor-pointer ${
                  isActive
                    ? "text-blue-600 font-semibold bg-blue-100 "
                    : "hover:bg-gray-100"
                }`
              }
            >
              <FaUser className="mr-3" /> Patients
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/doctor/appointments"
              className={({ isActive }) =>
                `flex items-center px-6 py-2 cursor-pointer ${
                  isActive
                    ? "text-blue-600 font-semibold bg-blue-100"
                    : "hover:bg-gray-100"
                }`
              }
            >
              <FaCalendarAlt className="mr-3" /> Appointments
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/doctor/records"
              className={({ isActive }) =>
                `flex items-center px-6 py-2 cursor-pointer ${
                  isActive
                    ? "text-blue-600 font-semibold bg-blue-100 "
                    : "hover:bg-gray-100"
                }`
              }
            >
              <FaClipboardList className="mr-3" /> Medical Records
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/doctor/settings"
              className={({ isActive }) =>
                `flex items-center px-6 py-2 cursor-pointer${
                  isActive
                    ? "text-blue-600 font-bold bg-blue-100 "
                    : "hover:bg-gray-100"
                }`
              }
            >
              <FaCog className="mr-3" /> Settings
            </NavLink>
          </li>

          <li>
            <NavLink
              to="logout"
              className={({ isActive }) =>
                `flex items-center px-6 py-2 cursor-pointer${
                  isActive
                    ? "text-blue-600 font-bold bg-blue-100 "
                    : "hover:bg-gray-100"
                }`
              }
            >
              <FaSignOutAlt className="mr-3" /> Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarDoctor;
