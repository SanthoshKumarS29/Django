import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
  return (
    <div>
        <div className='bg-black px-4 py-2 h-screen text-white flex flex-col justify-center items-center'>
            <div className='max-w-xl border-2 border-yellow-300'>
                <div className='bg-yellow-300 text-black p-6 m-3'>
                    <h1 className='text-xl font-bold uppercase'>Emergency Alert System For Human Safety</h1>
                </div>
                <div className='p-6 m-3'>
                    <p className='text-base font-medium leading-loose'>To day world,Our inda developed and improved a lots in technologies and also in education systems.Even though were insecured in lots of sitituation as women we face a domestic volience and so on as men they anwanted fights and robberies attack so prevent the incident you can quick register and protect yourself from a small insecurity</p>
                </div>
                <div className='flex justify-center p-6 m-3'>
                    <button className='border-2 border-red-500 px-7 py-3 text-base font-bold rounded-md hover:bg-red-500 duration-500'><Link to='/RegForm'>Register Now!</Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterScreen