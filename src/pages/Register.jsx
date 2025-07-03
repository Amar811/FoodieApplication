import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username,setUsername]=useState('');
    const navigate = useNavigate()

    const handleChange =(e)=>{
        setUsername(e.target.value);
    }

    const handleRegister = (e)=>{
        e.preventDefault();
        if(!username) return alert('please enter a username');
        localStorage.setItem('registeredUser',username);
        alert('Registered successfully! please login.');
        navigate('/login');
    }
  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Enter username"
          className="w-full p-2 border rounded"
          
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
