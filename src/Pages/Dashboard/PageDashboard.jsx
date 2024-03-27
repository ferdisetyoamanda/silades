import React from "react";

import { Link } from "react-router-dom";
import Navbar from "../../Components/Dashboard/Top";
import Hero from "../../Components/Dashboard/Hero";
import CardReport from "../../Components/Dashboard/CardReport";
import Footer from "../../Components/Dashboard/Footer";




const PageDashboard = () => {
    return (
        <div className="main-content bg-gray-100 max-w-full">
            <Navbar />
            <Hero />
            <div className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 md:flex lg:grid-cols-2 gap-2">
                    <CardReport />
                    
                    
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default PageDashboard;
