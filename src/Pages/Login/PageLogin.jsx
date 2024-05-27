import React from "react";
import Navbar from "../../Components/Dashboard/Top";
import Footer from "../../Components/Dashboard/Footer";
import LoginForm from "../../Components/Dashboard/Login/LoginForm";



const PageLogin = () => {

    return (
        <div className="main-content bg-gray-100 max-w-full">
            <Navbar />
            <LoginForm />
            <Footer />
        </div>
    );
};

export default PageLogin;