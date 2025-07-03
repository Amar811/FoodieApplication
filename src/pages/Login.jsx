import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const [username,setUsername]=useState('');
    const navigate=useNavigate();
    const {login}=useAuth();

    const handlechange=(e)=>{
        setUsername(e.target.value);
    }
    const handleLogin=(e)=>{
    e.preventDefault();
    const registeredUser =localStorage.getItem('registeredUser');
    if(username===registeredUser){
        login(username);
        navigate('/');
    }
    else{
        alert("user not found.please register.");
    }
    };
  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input 
        type="text"
        value={username}
        onChange={handlechange}
        className="w-full p-2 border rounded"
        />
        <button className="w-full bg-green-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
