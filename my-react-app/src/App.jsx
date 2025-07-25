import {BrowserRouter as Router,Routes,Route}from "react-router-dom";
import DashboardDoctor from "./Pages/Doctor/DashboardDoctor";
import "@fontsource/roboto/400.css";
import MedicalRecordsPage from "./Pages/Doctor/MedicalRecords";
import Appointment from "./Pages/Doctor/Appointment";
import SettingsDoctor from "./Pages/Doctor/SettingsDoctor";
import Login from "./Pages/Login";
import Logout from "./Pages/Doctor/Logout";
import StaffPage from "./Pages/Admin/StaffManagement";
import BillsPage from "./Pages/Admin/Bills";
import DashboardAdmin from "./Pages/Admin/DashboardAdmin";
import MedicalRecordPage from "./Pages/Admin/MedicalRecord";
import PatientPage from "./Pages/Admin/PatientAdmin";
import PatientReceptionistPage from "./Pages/Receptionist.jsx/PatientRecep";
import AppointmentsPage from "./Pages/Receptionist.jsx/AppointmentReceptionist";
import RegisterPage from "./Pages/Register";
import Appointmentpatient from "./Pages/Patient/Appointment";
import AppointmentAdmin from "./Pages/Admin/AppointmentAdmin";
import PatientView from "./Pages/Admin/PatientsDetails";
import Settingsrecep from "./Pages/Receptionist.jsx/Settings";
import SettingsAdmin from "./Pages/Admin/SettingsAdmin";
import MedicalRecordView from "./Pages/Admin/MedicalRecordsView";
import PatientLandingPage from "./Pages/Patient/PatientLandingPage";
import PatientiPage from "./Pages/Doctor/Patient";
import DashboardReceptionist from "./Pages/Receptionist.jsx/DashboardReceptionist";
import BillsPaymentPage from "./Pages/Receptionist.jsx/BillsReceptionist";


function App() {
  return (
    <Router>
      <Routes>
        {/* Doctor routes */}
        <Route path="/" element={<Login/>} />
        <Route path="doctor/dashboard" element={<DashboardDoctor />} />
        <Route path="doctor/patients" element={<PatientiPage />} />
        <Route path="doctor/records" element={<MedicalRecordsPage />} />
        <Route path="doctor/appointments" element={<Appointment />} />
        <Route path="doctor/settings" element={<SettingsDoctor />} />
        <Route path="doctor/logout" element={<Logout />} />

          {/* Admin Routes */}
        <Route path="admin/dashboard" element={<DashboardAdmin />} />
        <Route path="admin/patient" element={<PatientPage />} />
        <Route path="/patients/:id" element={<PatientView />} />
        <Route path="admin/record" element={<MedicalRecordPage />} />
        <Route path="/medicalrecords/:id" element={<MedicalRecordView />} />
        <Route path="admin/staff" element={<StaffPage />} />
        <Route path="admin/bills" element={<BillsPage />} />
        <Route path="admin/appointment" element={<AppointmentAdmin />} />
        <Route path="admin/settings" element={<SettingsAdmin />} />
        <Route path="admin/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterPage/>} />
        

          {/* patient route */}
        <Route path="/appointment" element={<Appointmentpatient/>} />
        <Route path="/landing" element={<PatientLandingPage />} />
           {/* Receptionist route */}

         <Route path="receptionist/dashboard" element={<DashboardReceptionist />} />
        <Route path="receptionist/patient" element={<PatientReceptionistPage />} />
        <Route path="receptionist/appointment" element={<AppointmentsPage />} />
         <Route path="receptionist/bills" element={<BillsPaymentPage />} />
         <Route path="receptionist/patient" element={<PatientReceptionistPage />} />
        <Route path="receptionist/settings" element={<Settingsrecep />} />
      </Routes>
    </Router> 

  );
}

export default App;



