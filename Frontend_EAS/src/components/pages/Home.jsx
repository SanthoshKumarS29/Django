import React, { useState } from 'react'
import { PiSirenBold } from "react-icons/pi";
import axios from 'axios'

const Home = () => {
  const [loading, setLoading] = useState(false);

  const handleAlert = async () => {
    setLoading(true);
    try {
      // We'll send the alert without specifying a user ID
      await axios.post('http://127.0.0.1:8000/app/send-alert/');
      alert('Alert email sent successfully');
    } catch (err) {
      console.log('error', err);
      alert('Failed to send alert');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='text-white'>
      <div>
        <div className='bg-yellow-400 text-black py-10 px-4'>
          <h1 className='text-2xl font-bold uppercase'>Emergency Alert System</h1>
        </div>
        <div className='flex flex-col gap-10 justify-center items-center py-28'>
          <h1 className='text-3xl font-medium'>Click the Button</h1>
          <button 
            onClick={handleAlert} 
            disabled={loading}
            className='text-red-700 text-4xl border-[7px] border-red-700 rounded-full p-10'
          >
            <PiSirenBold size={150}/>
          </button>
          {loading && <p>Sending alert...</p>}
        </div>
      </div>
    </div>
  )
}

export default Home;