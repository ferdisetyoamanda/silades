import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

import { loginUser } from '../../../utils/config';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const formRef = useRef();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleLogin();
      }
    };

    const formElement = formRef.current;
    formElement.addEventListener('keypress', handleKeyPress);

    return () => {
      formElement.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const isSuccess = await loginUser(username, password);

      if (isSuccess) {
        console.log('Login success!', isSuccess);
        if (isSuccess === 'admin') window.location.href = '/admin';
        if (isSuccess === 'user') window.location.href = '/';
      } else {
        console.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  return (
    <motion.div
      className="h-screen flex justify-center items-center bg-gray-100"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded w-full flex justify-center">
        <motion.div
          className="image-dummy w-96 justify-center items-center hidden md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="relative w-96 h-96 flex justify-center items-center">

          </div>
          <img
            src="../../../src/assets/icon-hp.png"
            alt="dummy"
            className="absolute size-96"
            style={{ zIndex: 1 }}
          />
          <motion.img
            src="../../../src/assets/icon-search2.png"
            alt="dummy"
            className="absolute size-64 mr-32"
            style={{ zIndex: 2 }}
            animate={{
              scale: [1, 1.2, 1.3, 1, 1],
              rotate: [30, 60, 120, 0, 0],
              borderRadius: ["20%", "20%", "20%", "20%", "20%"]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        </motion.div>
        <div className="bg-white p-8 rounded shadow-md w-96">
          <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
            <div className="text-2xl font-semibold mb-8 justify-center text-center border-b-2">
              <h6 className='text-xl font-semibold mb-1'>Log In Your Account</h6>
            </div>
            <div className="mb-4 mt-10">
              <label className="block text-sm font-medium text-gray-700">Nama Pengguna</label>
              <motion.input
                type="email"
                name='email'
                className="mt-1 p-2 w-full border rounded"
                value={username}
                onChange={handleUsernameChange}
                placeholder='Masukkan Nama Pengguna'
                required={true}
                aria-errormessage='email harus diisi'
                whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Kata Sandi</label>
              <div className="relative">
                <motion.input
                  type={showPassword ? 'text' : 'password'}
                  className="mt-1 p-2 w-full border rounded"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder='Masukkan Kata Sandi'
                  required={true}
                  aria-errormessage='password harus diisi'
                  whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <button
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                </button>
              </div>
            </div>

            <div className="flex justify-between">
              <Link to="/riset" className="hover:text-blue-600">
                <motion.button
                  className="text-sm text-gray-500"
                  onClick={() => console.log('Lupa Kata Sandi')}
                  whileHover={{ scale: 1.1, color: '#3182ce' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Lupa Kata Sandi?
                </motion.button>
              </Link>
              <Link to="/register" className="hover:text-blue-600">
                <motion.button
                  className="text-sm text-blue-500"
                  onClick={() => console.log('Buat Akun')}
                  whileHover={{ scale: 1.1, color: '#1a202c' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Buat Akun
                </motion.button>
              </Link>
            </div>
            <motion.button
              className="bg-blue-500 text-white p-2 rounded-xl w-full mt-4"
              onClick={handleLogin}
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
              Masuk
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginForm;
