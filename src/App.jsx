import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PageDashboard from "./Pages/Dashboard/PageDashboard";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PageDashboard />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
