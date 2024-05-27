import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Dashboard/Top";
import Hero from "../../Components/Dashboard/Hero";
import Pagination from "../../Components/Dashboard/Pagination.jsx";
import CardReport from "../../Components/Dashboard/CardReport";
import Footer from "../../Components/Dashboard/Footer";
import { dummyData } from "../../data/dummy.js";
import { dummyPembangunan } from "../../data/dumyypembangunan.js";
import { user } from "../../data/user.js";

import { motion } from "framer-motion";


const itemsPerPage = 6;

const PageDashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [dataType, setDataType] = useState("laporan");

    useEffect(() => {
        if (dataType === "laporan") {
            setFilteredData(dummyData.filter(data =>
                data.village.toLowerCase().includes(searchTerm.toLowerCase())
            ));
            setTotalPages(Math.ceil(dummyData.length / itemsPerPage));
        } else {
            setFilteredData(dummyPembangunan.filter(data =>
                data.village.toLowerCase().includes(searchTerm.toLowerCase())
            ));
            setTotalPages(Math.ceil(dummyPembangunan.length / itemsPerPage));
        }
        setCurrentPage(1);
    }, [searchTerm, dataType]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleDataTypeChange = (type) => {
        setDataType(type);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    let currentData = filteredData.slice(startIndex, endIndex);

    return (
        <div className="main-content bg-gray-100 max-w-full">
            <Navbar data={user} />

            <Hero />
            <div className="nav my-4 ml-2 justify-between  lg:flex">
                <div className="left my-2">
                    <motion.button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mr-4 ${dataType === "laporan" ? "bg-blue-700" : ""
                            }`}
                        onClick={() => handleDataTypeChange("laporan")}
                        whileTap={{ scale: 0.8 }}
                    >
                        Laporan
                    </motion.button>
                    <motion.button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl ${dataType === "pembangunan" ? "bg-blue-700" : ""
                            }`}
                        onClick={() => handleDataTypeChange("pembangunan")}
                        whileTap={{ scale: 0.8 }}
                    >
                        Pembangunan
                    </motion.button>
                </div>
                <div className="right mr-4">
                    <div className="search  flex items-center border border-gray-300 rounded-md px-3 py-2">
                        <label htmlFor="" className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l4.5 4.5M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </label>
                        <input
                            type="text"
                            className="  placeholder-gray-400 focus:outline-none flex-grow"
                            placeholder="Cari berdasarkan Desa..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                </div>

            </div>



            <div className="container mx-auto py-8 px-4">

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4">
                    {currentData.map((data, index) => (
                        <CardReport key={index} data={data} />
                    ))}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
            <Footer />
        </div>
    );
};

export default PageDashboard;
