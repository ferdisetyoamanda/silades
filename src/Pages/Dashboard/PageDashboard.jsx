import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Dashboard/Footer";
import Navbar from "../../Components/Dashboard/Navbar";

const PageDashboard = () => {
    return (
        <div className="main-content bg-gray-100 max-w-full">
            <Navbar />

            <h1 className="text-2xl font-semibold mb-4">Selamat datang di Aplikasi Pelaporan Infrastruktur!</h1>
            <Footer />
        </div>
    );
};
export default PageDashboard;
