import React, { useState } from 'react';
import { motion } from "framer-motion";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

const Profile = () => {
    const [isModalOpenUpadate, setIsModalOpenUpdate] = useState(false);
    const [isModalOpenPas, setIsModalOpenPas] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordNew, setShowPasswordNew] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const handleOpenModalUpdate = () => {
        setIsModalOpenUpdate(true);
    };

    const handleCloseModalUpdate = () => {
        setIsModalOpenUpdate(false);
    };

    const handleOpenModalPas = () => {
        setIsModalOpenPas(true);
    };

    const handleCloseModalPas = () => {
        setIsModalOpenPas(false);
    };


    const handleChangePassword = (e) => {
        e.preventDefault();
        // Lakukan validasi kata sandi dan proses perubahan kata sandi
        if (newPassword === confirmPassword) {
            // Lakukan proses perubahan kata sandi
            console.log("Kata sandi berhasil diubah");
            handleCloseModalPas(); // Tutup modal setelah perubahan kata sandi
        } else {
            console.log("Konfirmasi kata sandi tidak sesuai");
            // Tampilkan pesan kesalahan bahwa konfirmasi kata sandi tidak sesuai
        }
    };

    return (
        <motion.div
            className="h-screen justify-center items-center bg-gray-100 mt-4 md:mt-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >

            <div className="Content flex flex-col items-center">

                <div className="Profile-Image mb-4">
                    <img className='w-32 h-32 rounded-full' src="https://res.cloudinary.com/dkxt6mlnh/image/upload/v1682927959/drown/images-removebg-preview_nmbyo7.png" alt="Profile" />
                </div>
                <div className="Profile-Content w-full md:w-1/2">
                    <div className="top text-center mb-4">
                        <h2 className='text-xl font-bold mb-1'>Tyoo</h2>
                        <div className="contact">
                            <h3 className='mb-1'>Email: Email@gmail.com</h3>
                            <h3>Phone: 087777777</h3>
                        </div>
                    </div>
                    <div className="bottom border-gray-300 border rounded-md p-4">
                        <div className="Data mb-4">
                            <h4 className='text-center font-semibold'>Data Diri</h4>
                        </div>
                        <div className="address mb-4">
                            <div className="flex border rounded p-2 mb-2">
                                <h4 className='font-semibold'>Alamat Lengkap :</h4>
                                <div className="fill ml-2 border-gray-300">
                                    Jalann jalann
                                </div>
                            </div>

                            <div className="flex mb-2">
                                <div className="district flex w-1/2 border rounded p-2 mr-2">
                                    <h4 className='font-semibold'>Kabupaten :</h4>
                                    <p className='ml-2'> Brebes</p>
                                </div>
                                <div className="subdistrict w-1/2 border rounded p-2">
                                    <h4 className='font-semibold'>Kecamatan</h4>
                                </div>
                            </div>
                            <div className="flex mb-2">
                                <div className="village w-1/2 border rounded p-2 mr-2">
                                    <h4 className='font-semibold'>Desa</h4>
                                </div>
                                <div className="flex w-1/2">
                                    <div className="rt border rounded w-1/2 mr-1 p-2">
                                        <h4 className='font-semibold'>RT</h4>
                                    </div>
                                    <div className="rw border rounded w-1/2 ml-1 p-2">
                                        <h4 className='font-semibold'>RW</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-4 justify-center">
                            <motion.button
                                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleOpenModalUpdate}
                            >
                                Edit Profile
                            </motion.button>
                            <motion.button
                                className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleOpenModalPas}
                            >
                                Change Password
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpenUpadate && (
                <div className="fixed h-screen inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                    <motion.div
                        className="bg-white p-6 rounded-md shadow-md h-full w-full max-w-lg"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
                        {/* Form untuk mengedit profil */}
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Nama Pengguna</label>
                                <motion.input
                                    type="text"
                                    className="mt-1 p-2 w-full border rounded"
                                    placeholder='Masukkan Nama Pengguna'
                                    required={true}
                                    aria-errormessage='email'
                                    whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                            <div className="flex ">
                                <div className="mb-4 w-1/2 mr-1">
                                    <label className="block text-sm font-medium text-gray-700">Alamat Email</label>
                                    <motion.input
                                        type="email"
                                        className="mt-1 p-2 w-full border rounded"
                                        placeholder='Email'
                                        whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                                <div className="mb-4 w-1/2 ml-1">
                                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <motion.input
                                        type="text"
                                        className="mt-1 p-2 w-full border rounded"
                                        placeholder='text'
                                        whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>


                            </div>
                            <div className="flex">
                                <div className="mb-4 mr-1">
                                    <label className="block text-sm font-medium text-gray-700">Born Place</label>
                                    <motion.input
                                        type="text"
                                        className="mt-1 p-2 w-full border rounded"
                                        placeholder='Place'
                                        whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                                <div className="mb-4 ml-1">
                                    <label className="block text-sm font-medium text-gray-700">Born Date</label>
                                    <motion.input
                                        type="text"
                                        className="mt-1 p-2 w-full border rounded"
                                        placeholder='Date'
                                        whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Full Adress</label>
                                <motion.input
                                    type="text"
                                    className="mt-1 p-2 w-full border rounded"
                                    placeholder='Adress'
                                    whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                            <div className="flex">
                                <div className="mb-4 mr-1">
                                    <label className="block text-sm font-medium text-gray-700">District</label>
                                    <motion.input
                                        type="text"
                                        className="mt-1 p-2 w-full border rounded"
                                        placeholder='District'
                                        whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                                <div className="mb-4 ml-1">
                                    <label className="block text-sm font-medium text-gray-700">Sub District</label>
                                    <motion.input
                                        type="text"
                                        className="mt-1 p-2 w-full border rounded"
                                        placeholder='Sub District'
                                        whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mb-4 md:w-4/5">
                                    <label className="block text-sm font-medium text-gray-700">Village</label>
                                    <motion.input
                                        type="text"
                                        className="mt-1 p-2 w-full border rounded"
                                        placeholder='Village'
                                        whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                                <div className="flex">
                                    <div className="mb-4 mx-2">
                                        <label className="block text-sm font-medium text-gray-700">RT</label>
                                        <motion.input
                                            type="text"
                                            className="mt-1 p-2 w-full border rounded"
                                            placeholder='RT'
                                            whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">RW</label>
                                        <motion.input
                                            type="text"
                                            className="mt-1 p-2 w-full border rounded"
                                            placeholder='RW'
                                            whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                </div>
                            </div>




                            <div className="flex justify-end space-x-4">
                                <motion.button
                                    className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleCloseModalUpdate}
                                >
                                    Cancel
                                </motion.button>
                                <motion.button
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                >
                                    Save
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}

            {/* Modal untuk mengganti kata sandi */}
            {isModalOpenPas && (
                <div className="fixed h-screen inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                    <motion.div
                        className="bg-white p-6 rounded-md shadow-md h-full w-full max-w-lg"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Change Password</h2>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Old Password</label>
                            <div className="relative">
                                <motion.input
                                    type={showPassword ? 'text' : 'password'}
                                    className="mt-1 p-2 w-full border rounded"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
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

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">New Password</label>
                            <div className="relative">
                                <motion.input
                                    type={showPassword ? 'text' : 'password'}
                                    className="mt-1 p-2 w-full border rounded"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder='New Password'
                                    required={true}
                                    aria-errormessage='password harus diisi'
                                    whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <button
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500"
                                    onClick={() => setShowPasswordNew(!showPasswordNew)}
                                >
                                    {showPasswordNew ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                                </button>

                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                            <div className="relative">
                                <motion.input
                                    type={showPassword ? 'text' : 'password'}
                                    className="mt-1 p-2 w-full border rounded"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder='Confirm New Password'
                                    required={true}
                                    aria-errormessage='password harus diisi'
                                    whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <button
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500"
                                    onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                                >
                                    {showPasswordConfirm ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                                </button>

                            </div>
                        </div>

                       
                        <div className="flex justify-end space-x-4">
                            <motion.button
                                className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleCloseModalPas}
                            >
                                Cancel
                            </motion.button>
                            <motion.button
                                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                onSubmit={handleChangePassword}
                            >
                                Save
                            </motion.button>
                        </div>

                    </motion.div>
                </div>
            )}
        </motion.div>
    );
};

export default Profile;
