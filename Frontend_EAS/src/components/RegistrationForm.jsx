import React, { useState } from 'react';
import axios from 'axios'
import {FaCalendar} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [showExtraEmail, setShowExtraEmail] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const toggleExtraEmail = (e) => {
    e.preventDefault();
    setShowExtraEmail(!showExtraEmail);
  };

  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    address: '',
    qualification: '',
    contact_no: '',
    age: '',
    major_problem: '',
    emergency_contact_no: '',
    emergency_email: '',
    extra_email:''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData)
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await axios.post('http://127.0.0.1:8000/app/register/',formData)
      console.log(formData)
      navigate('/LogPage')
      alert('user registered successfully')

      setFormData({
        name: '',
        dob: '',
        email: '',
        address: '',
        qualification: '',
        contact_no: '',
        age: '',
        major_problem: '',
        emergency_contact_no: '',
        emergency_email: '',
        extra_email:''
      })
    } catch (error){
      console.log('You have error',error)
      alert('Failed to register')
    }

  }


  return (
    <div className="max-w-3xl mx-auto border-2 border-yellow-300 text-white">
      <div className="bg-yellow-300 text-black p-6 m-3">
        <h1 className="text-xl font-bold uppercase">Registration Form</h1>
      </div>
      <form className="max-w-lg mx-auto p-6" onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="flex flex-col gap-6 text-white">
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label htmlFor="name" className="text-base font-semibold uppercase w-full sm:w-1/3">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full sm:w-2/3 bg-transparent border-2 border-yellow-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label htmlFor="date" className="text-base font-semibold uppercase w-full sm:w-1/3">
                DOB
              </label>
              <div className="relative w-full sm:w-2/3">
                <input
                  className="w-full text-base p-2 bg-transparent border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  type="date"
                  name="dob"
                  id="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                />
                <span className="absolute right-3 top-3 text-yellow-500">
                  <FaCalendar />
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label htmlFor="email" className="text-base font-semibold uppercase w-full sm:w-1/3">
                Email
              </label>
              <input
                className="w-full sm:w-2/3 bg-transparent border-2 border-yellow-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label htmlFor="addr" className="text-base font-semibold uppercase w-full sm:w-1/3">
                Address
              </label>
              <textarea
                name="address"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full sm:w-2/3 bg-transparent border-2 border-yellow-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label htmlFor="qual" className="text-base font-semibold uppercase w-full sm:w-1/3">
                Qualification
              </label>
              <input
                className="w-full sm:w-2/3 bg-transparent border-2 border-yellow-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                name="qualification"
                id="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label htmlFor="cont" className="text-base font-semibold uppercase w-full sm:w-1/3">
                Contact No
              </label>
              <input
                className="w-full sm:w-2/3 bg-transparent border-2 border-yellow-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                name="contact_no"
                id="contact_no"
                value={formData.contact_no}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label htmlFor="age" className="text-base font-semibold uppercase w-full sm:w-1/3">
                Age
              </label>
              <input
                className="w-full sm:w-2/3 bg-transparent border-2 border-yellow-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                name="age"
                id="age"
                value={formData.age}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <label htmlFor="prblm" className="text-base font-semibold uppercase w-full sm:w-1/3">
                Major Problems
              </label>
              <div className="relative w-full sm:w-2/3">
                <select
                  name="major_problem"
                  id="major_problem"
                  value={formData.major_problem}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-2 border-yellow-400 rounded-md p-2 appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="" className="text-black">
                    Choose
                  </option>
                  <option value="Domestic Problem" className="text-black">
                    Domestic Problem
                  </option>
                  <option value="Unwanted Fights" className="text-black">
                    Unwanted Fights
                  </option>
                  <option value="Robberies" className="text-black">
                    Robberies
                  </option>
                </select>
                <span className="absolute right-3 top-3 text-yellow-500 pointer-events-none">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleNext}
                className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-lg font-semibold">Emergency Contact Information</p>
              <p className="text-sm">Provide the contact information of a person to be notified in a critical situation.</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <label htmlFor="anocont" className="text-base font-semibold uppercase w-full sm:w-1/3">
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
                <label htmlFor="anoemail" className="text-base font-semibold uppercase w-full sm:w-1/3">
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

              {showExtraEmail && (
                <div className="flex flex-col sm:flex-row gap-2 items-center">
                  <label htmlFor="extraemail" className="text-base font-semibold uppercase w-full sm:w-1/3">
                    Another Email ID
                  </label>
                  <input
                    type="email"
                    name="extra_email"
                    id="extra_email"
                    value={formData.extra_email}
                    onChange={handleInputChange}
                    className="w-full sm:w-2/3 bg-transparent border-2 border-yellow-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              )}

              <div className="flex justify-center gap-4">
                <button
                  onClick={toggleExtraEmail}
                  className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  {showExtraEmail ? 'Remove' : 'Add More'}
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={handlePrevious}
                className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                Previous
              </button>
              <button
                type="submit"
                className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;

