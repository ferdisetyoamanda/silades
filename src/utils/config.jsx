import axios from 'axios';

// URL base backend
export const BASE_URL = "http://127.0.0.1:8081";

// prov_api = https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json
export const city_api = "https://www.emsifa.com/api-wilayah-indonesia/api/regencies/33.json"
export const getCity = async () => {
    try {
        const response = await axios.get(city_api);
        return response.data;
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

export const subdistrict_api = "https://www.emsifa.com/api-wilayah-indonesia/api/districts/3329.json"

export const getSubDitrict = async () => {
    try {
        const response = await axios.get(subdistrict_api);
        return response.data;
    } catch (eror) {
        console.eror('An error occured', eror)
    }
};

export const getVillageBySubdistrict = async (subdistrictId) => {
    try {
        const village_api = `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${subdistrictId}.json`;
        const response = await axios.get(village_api);
        return response.data;
    } catch (error) {
        console.error('An error occurred while fetching villages by subdistrict:', error);
        throw error;
    }
};

// Menyimpan token ke localStorage
export const setAuthToken = (token) => {
    localStorage.setItem('token', token);
};

// Mengambil token dari localStorage
export const getAuthToken = () => {
    return localStorage.getItem('token');
};

// Menghapus token dari localStorage
export const removeAuthToken = () => {
    localStorage.removeItem('token');
};

// Login user
export const loginUser = async (username, password) => {
    const data = {
        email: username,
        password: password
    };

    try {
        const response = await axios.post(`${BASE_URL}/auth/signin`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const { token } = response.data;

        // Simpan token di localStorage
        setAuthToken(token);

        // Atur header Authorization dengan token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const result = response.data.role ? response.data.role : 'user';
        console.log("Respon API:", result);
        return result;
    } catch (error) {
        if (error.response && error.response.data) {
            // Tampilkan pesan error dari backend
            console.error("Kesalahan Permintaan API:", error.response.data.message);
        } else {
            // Tampilkan pesan error umum
            console.error("Kesalahan Permintaan API:", error.message);
        }
        return false; // Gagal login
    }
};


// Register user
// "email": "string",
// "name": "string",
// "password": "string",
// "re_password": "string",
// "phone_number": "string",
// "full_address": "string",
// "bod": "string",
// "bop": "string",
// "rt_num": 0,
// "rw_num": 0,
// "village_id": 0,
// "subdistrict_id": 0
export const registerUser = async (email, name, password, re_password, phone_number, full_address, bod, bop, rt_num, rw_num, village_id, subdistrict_id) => {
    try {
        const response = await axios.post(`${BASE_URL}user/auth/signup`, {
            email,
            name,
            password,
            re_password,
            phone_number,
            full_address,
            bod,
            bop,
            rt_num,
            rw_num,
            village_id,
            subdistrict_id
        });

        const { data } = response;

        if (data) {
            return {
                message: data.message
            };
        }
    } catch (error) {
        console.error('An error occurred during register:', error);
    }
}