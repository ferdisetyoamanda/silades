// src/components/Hero.js

import React from 'react';
import backgroundImage from '../../../src/assets/background.png';
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }} className="bg-center bg-no-repeat flex items-center h-[75vh] lg:h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Mari jadikan suara kita terdengar untuk perubahan yang positif</h1>
        <p className="text-lg text-gray-300">Sampaikan aspirasi Anda dan saksikan perubahan yang nyata di Kabupaten Brebes.</p>
      </div>
    </motion.div>
  );
}

export default Hero;
