import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white flex justify-between items-center shadow-lg">
            <h1 className="text-xl font-bold">Nutrify</h1>
            <div>
                <Link to="/" className="px-4 hover:underline">Home</Link>
                <Link to="/login" className="px-4 hover:underline">Login</Link>
                <Link to="/signup" className="px-4 hover:underline">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Navbar;
