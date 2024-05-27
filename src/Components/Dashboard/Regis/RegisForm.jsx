import React, { useState, useEffect } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

// import { registerUser } from '../../../utils/ApiConfig';
import { getSubDitrict, getVillageBySubdistrict } from '../../../utils/config';

const RegisterForm = () => {
    //phone_number	full_address	rt_rw	village	subdistrict	
    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [phone_number, setPhoneNumber] = useState('');
    const [full_address, setFullAddress] = useState('');
    const [birth_date, setBirthDate] = useState('');
    const [birth_place, setBirthPlace] = useState('');
    const [rt_num, setRtNum] = useState('');
    const [rw_num, setRwNum] = useState('');
    const [subdistricts, setSubdistricts] = useState([]);
    const [villages, setVillages] = useState([]);
    const [selectedSubdistrict, setSelectedSubdistrict] = useState('');
    const [selectedVillage, setSelectedVillage] = useState('');


    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {
        getSubDitrict().then((response) => {
            // Mengatur data kecamatan ke dalam state
            setSubdistricts(response);
        }).catch((error) => {
            console.error('An error occurred while fetching subdistricts:', error);
        });
    }, []);

    useEffect(() => {
        // Memastikan ID kecamatan yang dipilih ada
        if (selectedSubdistrict) {
            // Mengambil data desa berdasarkan ID kecamatan
            getVillageBySubdistrict(selectedSubdistrict).then((response) => {
                // Mengatur data desa ke dalam state
                setVillages(response);
            }).catch((error) => {
                console.error('An error occurred while fetching villages:', error);
            });
        }
    }, [selectedSubdistrict]);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleUseremailChange = (event) => {
        setUseremail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        // Memeriksa kesesuaian kata sandi dan ulangi kata sandi
        if (repassword && event.target.value !== repassword) {
            setPasswordMatchError(true);
        } else {
            setPasswordMatchError(false);
        }
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleFullAddressChange = (event) => {
        setFullAddress(event.target.value);
    };

    const handleBirthDateChange = (event) => {
        setBirthDate(event.target.value);
    };

    const handleBirthPlaceChange = (event) => {
        setBirthPlace(event.target.value);
    };

    const handleRtNumChange = (event) => {
        setRtNum(event.target.value);
    };

    const handleRwNumChange = (event) => {
        setRwNum(event.target.value);
    };

    const handleVillageChange = (event) => {
        // Mengatur ID desa yang dipilih
        setSelectedVillage(event.target.value);
    };

    const handleSubdistrictChange = (event) => {
        // Mengatur ID kecamatan yang dipilih
        setSelectedSubdistrict(event.target.value);
        // Mengosongkan nilai desa yang dipilih karena kecamatan berubah
        setSelectedVillage('');
    };

    const handleRepasswordChange = (event) => {
        setRepassword(event.target.value);
        // Memeriksa kesesuaian kata sandi dan ulangi kata sandi
        if (password && event.target.value !== password) {
            setPasswordMatchError(true);
        } else {
            setPasswordMatchError(false);
        }
    };


    const handleRegister = () => {
        if (password !== repassword) {
            setPasswordMatchError(true);
            return;
        }

        // Mengirimkan hanya ID kecamatan dan ID desa yang dipilih
        const userData = {
            name: username,
            email: useremail,
            password: password,
            re_password: repassword,
            phone_number: phone_number,
            full_address: full_address,
            bod: birth_date,
            bop: birth_place,
            rt_num: rt_num,
            rw_num: rw_num,
            subdistrict_id: selectedSubdistrict, // Mengirimkan ID kecamatan
            village_id: selectedVillage // Mengirimkan ID desa
        };

        console.log('Data pengguna:', userData);

        // Memproses data pengguna, misalnya dengan melakukan registrasi
        // registerUser(userData)
        //     .then(response => {
        //         // Handle success response
        //         navigate('/login');
        //     })
        //     .catch(error => {
        //         // Handle error response
        //         console.error('An error occurred during registration:', error);
        //     });
    };



    return (
        <motion.div
            className="flex justify-center items-center bg-gray-100"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="rounded w-full flex justify-center">



                <div className="bg-white p-8 rounded shadow-md md:w-3/5 w-96 md:mt-20 mb-4">
                    <div className="text-2xl font-semibold mb-8 justify-center text-center border-b-2">
                        <motion.img
                            src="../../../src/assets/icon-regis.png"
                            alt="dummy"
                            className="absolute size-12 ml-60 "
                            style={{ zIndex: 2 }}
                            animate={{
                                scale: [1, 1.2, 1.3, 1, 1],
                                rotate: [0, 30, -20, 0, 0],
                                borderRadius: ["20%", "20%", "20%", "20%", "20%"]
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                        />
                        <h6 className='text-xl font-semibold mb-1'>Daftar Akun Baru</h6>

                    </div>

                    <div>
                        <div className="mb-4 mt-10">
                            <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                            <motion.input
                                type="text"
                                className="mt-1 p-2 w-full border rounded"
                                value={username}
                                onChange={handleUsernameChange}
                                placeholder='Masukkan Nama Lengkap'
                                aria-errormessage='Nama harus diisi'
                                required={true}
                                whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                        <div className="md:flex">
                            <div className="mb-4 w-full md:mr-2">
                                <label className="block text-sm font-medium text-gray-700">Alamat Email</label>
                                <motion.input
                                    type="email"
                                    className="mt-1 p-2 w-full border rounded"
                                    value={useremail}
                                    onChange={handleUseremailChange}
                                    placeholder='Masukkan Alamat Email'
                                    required={true}
                                    whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                            <div className="mb-4 w-full md:ml-2">
                                <label className="block text-sm font-medium text-gray-700">Nomor Telepon</label>
                                <motion.input
                                    type="text"
                                    className="mt-1 p-2 w-full border rounded"
                                    value={phone_number}
                                    onChange={handlePhoneNumberChange}
                                    placeholder='Masukkan Nomor Telepon'
                                    required={true}
                                    whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                        </div>

                        <div className="md:flex">
                            <div className="mb-4 md:w-64 md:mr-4">
                                <label className="block text-sm font-medium text-gray-700">Tempat Lahir</label>
                                <motion.input
                                    type="text"
                                    className="mt-1 p-2 w-full border rounded"
                                    value={birth_place}
                                    onChange={handleBirthPlaceChange}
                                    placeholder='Masukkan Tempat Lahir'
                                    required={true}
                                    whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
                                <motion.input
                                    type="date"
                                    className="mt-1 p-2 w-full border rounded"
                                    value={birth_date}
                                    onChange={handleBirthDateChange}
                                    placeholder='Masukkan Tanggal Lahir'
                                    required={true}
                                    whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>

                        </div>

                        <div className="flex">
                            <div className="mb-4 w-full mr-2">
                                <label className="block text-sm font-medium text-gray-700">Kecamatan</label>
                                <motion.select
                                    className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={selectedSubdistrict}
                                    onChange={handleSubdistrictChange}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <option value="">Pilih Kecamatan</option>
                                    {/* Menampilkan daftar kecamatan */}
                                    {subdistricts.map((subdistrict) => (
                                        <option key={subdistrict.id} value={subdistrict.id}>{subdistrict.name}</option>
                                    ))}
                                </motion.select>

                            </div>

                            <div className="mb-4 w-full ml-2">
                                <label className="block text-sm font-medium text-gray-700">Desa/Kelurahan</label>
                                <select
                                    className="mt-1 p-2 w-full border rounded"
                                    value={selectedVillage}
                                    onChange={handleVillageChange}
                                >
                                    <option value="">Pilih Desa/Kelurahan</option>
                                    {/* Menampilkan daftar desa */}
                                    {villages.map((village) => (
                                        <option key={village.id} value={village.id}>{village.name}</option>
                                    ))}
                                </select>
                            </div>

                        </div>

                        <div className="rtrw flex ">
                            <div className="mb-4 mr-2">
                                <label className="block text-sm font-medium text-gray-700 ">RT</label>
                                <motion.input
                                    type="text"
                                    className="mt-1 p-2 w-full border rounded"
                                    value={rt_num}
                                    onChange={handleRtNumChange}
                                    placeholder='Masukkan RT'
                                    required={true}
                                    whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>

                            <div className="mb-4 ml-2">
                                <label className="block text-sm font-medium text-gray-700 ">RW</label>
                                <motion.input
                                    type="text"
                                    className="mt-1 p-2 w-full border rounded"
                                    value={rw_num}
                                    onChange={handleRwNumChange}
                                    placeholder='Masukkan RW'
                                    required={true}
                                    whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                        </div>




                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Alamat Lengkap</label>
                            <motion.input
                                type="text"
                                className="mt-1 p-2 w-full border rounded"
                                value={full_address}
                                onChange={handleFullAddressChange}
                                placeholder='Masukkan Alamat Lengkap'
                                required={true}
                                whileFocus={{ scale: 1.05, borderColor: '#3182ce' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                        <div className="md:flex">
                            <div className="mb-4 w-full mr-4">
                                <label className="block text-sm font-medium text-gray-700">Kata Sandi</label>
                                <div className="relative">
                                    <motion.input
                                        type={showPassword ? 'text' : 'password'}
                                        className="mt-1 p-2 w-full border rounded"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        placeholder='Masukkan Kata Sandi'
                                        required={true}
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
                            <div className="mb-4 w-full mr-4">
                                <label className="block text-sm font-medium text-gray-700">Ulangi Kata Sandi</label>
                                <div className="relative">
                                    <motion.input
                                        type={showPassword ? 'text' : 'password'}
                                        className={`mt-1 p-2 w-full border rounded ${passwordMatchError ? 'border-red-500' : ''}`}
                                        value={repassword}
                                        onChange={handleRepasswordChange}
                                        placeholder='Masukkan Ulang Kata Sandi'
                                        required={true}
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
                                {passwordMatchError && <p className="text-red-500 mt-1">Kata Sandi tidak cocok.</p>}

                            </div>


                        </div>
                        <div className="login flex">
                            <p className='mr-2'>
                                Sudah punya akun? Klik
                            </p>
                            <Link to="/login" className="">
                                <motion.button
                                    className="text-md hover:text-blue-600"
                                    onClick={() => console.log('Login')}
                                    whileHover={{ scale: 1.1, color: '#1a202c' }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Disini
                                </motion.button>
                            </Link>

                        </div>

                        <motion.button
                            className="w-full bg-blue-500 text-white p-2 rounded mt-4"
                            onClick={handleRegister}
                            whileTap={{ scale: 0.8 }}
                            whileHover={{ scale: 1.05 }}
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        >
                            Daftar
                        </motion.button>
                    </div>
                </div>
            </div>

        </motion.div>
    );
};

export default RegisterForm;
