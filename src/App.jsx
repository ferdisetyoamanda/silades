import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PageDashboard from "./Pages/Dashboard/PageDashboard";
import PageDetail from "./Pages/Dashboard/PageDetail";
import PageLogin from "./Pages/Login/PageLogin";
import PageRegis from "./Pages/Register/PageRegis";
import PageProfile from "./Pages/Profile/PageProfile";
import PageReport from "./Pages/User/Report/PageReport";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Dashboard */}
          <Route path="/" element={<PageDashboard />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/detail/:id" element={<PageDetail />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/register" element={<PageRegis />} />
          <Route path="/profile" element={<PageProfile />} />
          <Route path="/report" element={<PageReport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
