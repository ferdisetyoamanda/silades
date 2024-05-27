import React from "react";
import Navbar from "../../../Components/Dashboard/Top";
import Footer from "../../../Components/Dashboard/Footer";
import LocationComponent from "../../../Components/Dashboard/Map";




const PageReport = () => {

    return (
        <div className="main-content bg-gray-100  h-screen">
            <Navbar />
            {/* <LocationComponent /> */}

            <Footer />
        </div>
    );
};

export default PageReport;