import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPAge from "./pages/LoginPage/LoginPAge";
import FormPage1 from "./pages/FormPage1/FormPage1";
import LandingPage from "./pages/LandingPage/LandingPage";
import FormPage2 from "./pages/FormPage2/FormPage2";
import FormPage4 from "./pages/FormPage4/FormPage4";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPAge />} />
          <Route path="/formpage1" element={<FormPage1 />} />
          <Route path="/formpage2" element={<FormPage2 />} />
          <Route path="/formpage4" element={<FormPage4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
