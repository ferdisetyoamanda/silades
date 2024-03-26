// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-semibold">Silades</div>
      <div className="flex space-x-4">
        <a href="/" className="text-white hover:text-gray-300">Home</a>
        <a href="/laporin" className="text-white hover:text-gray-300">Laporin</a>
        <a href="/daftar-laporan" className="text-white hover:text-gray-300">Daftar Laporan</a>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-gray-200">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
