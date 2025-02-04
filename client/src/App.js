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
import UserProfle from "./pages/UserProfile/UserProfle";
import AdminProfile from "./pages/Admin/adminDashboard/Adimindashboard"
import Report from "./pages/Admin/Reports/Report"
import TopRecommendation from "./pages/TopRecomendation/TopRecommendation";
import Settings from "./pages/Admin/settings/Settings";
import AdminUserProfileView from "./pages/Admin/adminprofile/Adminprofile"
import AllMatches from "./pages/AllMatches/AllMatches";

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
          <Route path="/prof" element={<UserProfle />} />
          <Route path="/Admindashboard" element={<AdminProfile />} />
          <Route path="/Adminreport" element={<Report />} />
          <Route path="/toprecommendations" element={<TopRecommendation />} />
          <Route path="/allmatches" element={< AllMatches/>} />


          <Route path="/Adminreport" element={<Report />} />
          <Route path="/Adminsettings" element={<Settings />} />
          <Route path="/Adminusersview/:id" element={<AdminUserProfileView />} />




        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
