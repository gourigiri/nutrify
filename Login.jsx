import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) {
            navigate("/home");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                <form onSubmit={handleLogin} className="mt-4">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        Sign In
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-3">Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a></p>
            </div>
        </div>
    );
};

export default Login;
