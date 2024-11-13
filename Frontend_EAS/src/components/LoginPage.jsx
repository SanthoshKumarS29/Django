import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        emergency_contact_no: '',
        emergency_email: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/app/login/', formData);
            if (response.status === 200) {
                navigate('/home');
            }
        } catch (err) {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div>
            <div className='bg-black px-4 py-2 h-screen text-white flex flex-col justify-center items-center'>
                <div className='max-w-4xl border-2 border-yellow-300'>
                <div className='bg-yellow-300 text-black p-6 m-3'>
                    <h1 className='text-xl font-bold uppercase'>Login Page</h1>
                </div>
                <div className='p-3 m-3'>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row gap-2 items-center">
                        <label htmlFor="emergency_contact_no" className="text-base font-semibold uppercase w-full sm:w-1/3">
                            Contact No
                        </label>
                        <input
                            type="text"
                            name="emergency_contact_no"
                            id="emergency_contact_no"
                            value={formData.emergency_contact_no}
                            onChange={handleInputChange}
                            className="w-full sm:w-2/3 bg-transparent border-2 border-yellow-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 items-center">
                        <label htmlFor="emergency_email" className="text-base font-semibold uppercase w-full sm:w-1/3">
                            Email ID
                        </label>
                        <input
                            type="email"
                            name="emergency_email"
                            id="emergency_email"
                            value={formData.emergency_email}
                            onChange={handleInputChange}
                            className="w-full sm:w-2/3 bg-transparent border-2 border-yellow-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>

                    {error && <p className="text-red-500 text-center">{error}</p>}

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                            Login
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LoginPage;


{/*  */}
