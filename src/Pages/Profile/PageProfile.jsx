import React from "react";
import Navbar from "../../Components/Dashboard/Top";
import Profile from "../../Components/Profile/Profile";
import Footer from "../../Components/Dashboard/Footer";




const PageLogin = () => {

    return (
        <div className="main-content bg-gray-100 max-w-full">
            <Navbar />
            <Profile />
            <Footer />
        </div>
    );
};

export default PageLogin;