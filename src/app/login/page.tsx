'use client';

import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div>
            <form>
                <div className='flex flex-col items-center gap-10 justify-center min-h-screen'>
                    <h1 className='text-3xl'>Instagram clone</h1>
                    <input type="text" name="username" id="" className='border-whtie border-solid border p-2 w-3xs rounded-xl'/>
                    <input type="password" name="password" id="" className='border-whtie border-solid border p-2 w-3xs rounded-xl'/>
                    <button type="submit" className='bg-sky-100 p-2 rounded-lg w-3xs text-black'>Login</button>
                    <p>Don't have an account? <a href="/register">Register</a></p>
                </div>
            </form>
        </div>
    )
}

{/* <form>
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">Login</h1>
                    <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                        <input 
                            type="text" 
                            placeholder="Username" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                        />
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                        >
                            Login
                        </button>
                        <p className="text-center text-gray-600 mt-4">
                            Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
                        </p>
                    </div>
                </div> */}