import { NavLink } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaClipboardList, FaCog, FaSignOutAlt, FaMoneyBillWave  } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const SidebarAdmin = () => {
  return (
    <div className="w-50 bg-white shadow-lg flex flex-col h-full">

      <nav className="mt-10 flex-1">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/admin/dashboard"
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
              to="/admin/patient"
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
              to="/admin/staff"
              className={({ isActive }) =>
                `flex items-center px-6 py-2 cursor-pointer ${
                  isActive
                    ? "text-blue-600 font-semibold bg-blue-100 "
                    : "hover:bg-gray-100"
                }`
              }
            >
              <FaUser className="mr-3" /> Staff
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/appointment"
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
              to="/admin/bills"
              className={({ isActive }) =>
                `flex items-center px-6 py-2 cursor-pointer ${
                  isActive
                    ? "text-blue-600 font-semibold bg-blue-100 "
                    : "hover:bg-gray-100"
                }`
              }
            >
              < FaMoneyBillWave  className="mr-2" /> Bills and Payment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/record"
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
              to="/admin/settings"
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
              to="/admin/logout"
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

export default SidebarAdmin;
