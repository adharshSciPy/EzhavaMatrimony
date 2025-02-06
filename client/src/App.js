import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPAge from "./pages/LoginPage/LoginPAge";
import FormPage1 from "./pages/FormPage1/FormPage1";
import LandingPage from "./pages/LandingPage/LandingPage";
import FormPage2 from "./pages/FormPage2/FormPage2";
import FormPage4 from "./pages/FormPage4/FormPage4";
import FormPage3 from "./pages/FormPage3/FormPage3";
import Formpage5 from "./pages/FormPage5/FormPage5";
import Dashboard from "./pages/Dashboard/Dashboard";
import OtpPage from "./pages/Otppage/OtpPage"
import AdminProfile from "./pages/Admin/adminDashboard/Adimindashboard"
import Report from "./pages/Admin/Reports/Report"
import TopRecommendation from "./pages/TopRecomendation/TopRecommendation";
import Settings from "./pages/Admin/settings/Settings";
import AdminUserProfileView from "./pages/Admin/adminprofile/Adminprofile"
import GetFullUser from "./pages/Admin/userPage/GetFullUser"
import AllMatches from "./pages/AllMatches/AllMatches";
import AdminLanding from "./pages/Admin/adminLoginPage/AdminLogin"
import Report1 from "./pages/ReportViolation/Report1";
import UserMain from "./pages/UserMain/UserMain";
import UserSettings from "./pages/UserSettings/UserSettings";
import ResetPassword from "./pages/Admin/Passwordreset/PasswordReset"
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<LoginPAge />} />
          <Route path="/formpage1" element={<FormPage1 />} />
          <Route path="/formpage2" element={<FormPage2 />} />
          <Route path="/formpage3" element={<FormPage3/>} />
          <Route path="/formpage5" element={<Formpage5/>} />
          <Route path="/formpage4" element={<FormPage4 />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/OtpPage" element={<OtpPage />} />
          <Route path="/Admindashboard" element={<AdminProfile />} />
          <Route path="/Adminreport" element={<Report />} />
          <Route path="/toprecommendations" element={<TopRecommendation />} />
          <Route path="/allmatches" element={< AllMatches/>} />
          <Route path="/Adminsettings" element={<Settings />} />
          <Route path="/Adminusersview/:id" element={<AdminUserProfileView />} />
          <Route path="/getFullUser" element={<GetFullUser />} />
          <Route path="/adminlanding" element={<AdminLanding />} />
          <Route path="/report" element={<Report1 />} />
          <Route path="/mainuser" element={<UserMain/>} />
          <Route path="/Usettings" element={<UserSettings />} />
          <Route path="/resetPassword/:token" element={<ResetPassword />} />

        </Routes>
        <ToastContainer />  
      </BrowserRouter>
    </div>
  );
}

export default App;
