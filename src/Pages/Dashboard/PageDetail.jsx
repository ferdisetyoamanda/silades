import React from "react";
import Navbar from "../../Components/Dashboard/Top";
import Hero from "../../Components/Dashboard/Hero";
import Footer from "../../Components/Dashboard/Footer";
import DetailDev from "../../Components/Dashboard/DetailDev";
import { useParams } from "react-router-dom";  



const PageDetail = () => {
    const { id } = useParams();
    console.log(id);


    return (
        <div className="main-content bg-gray-100 max-w-full">
            <Navbar />
            <Hero />
            <DetailDev />
            <Footer />
        </div>
    );
};

export default PageDetail;