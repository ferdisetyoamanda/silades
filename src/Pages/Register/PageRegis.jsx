import React from "react";
import Navbar from "../../Components/Dashboard/Top";
import Footer from "../../Components/Dashboard/Footer";
import RegisterForm from "../../Components/Dashboard/Regis/RegisForm";



const PageRegis = () => {

    return (
        <div className="main-content bg-gray-100 max-w-full">
            <Navbar />
            <RegisterForm />
            <Footer />
        </div>
    );
};

export default PageRegis;