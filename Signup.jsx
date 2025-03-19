import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        setError("");

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Store user details in localStorage
        localStorage.setItem("user", JSON.stringify({ firstName, lastName, email }));

        // Redirect to Login page
        navigate("/login");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-blue-600">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSignup} className="mt-4">
                    <input 
                        type="text" 
                        placeholder="First Name" 
                        className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-500" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Last Name" 
                        className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-500" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-500" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-500" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-500" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-700 transition-all"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-3">
                    Already have an account? <a href="/login" className="text-green-500">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
