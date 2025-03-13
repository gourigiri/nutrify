import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-gray-100 to-green-200 text-gray-900 p-5">
            {/* Main Content */}
            <div className="text-center max-w-2xl">
                <p className="text-sm font-semibold text-green-600 tracking-wide">
                    Transform Your Health Journey.
                </p>
                <h1 className="text-4xl font-bold mt-2">
                    Eat Smart, <span className="text-green-700">Live Better,</span><br />
                    Feel Amazing
                </h1>
                <p className="mt-3 text-lg text-gray-700">
                    Discover personalized nutrition plans that align with your body's unique needs.
                </p>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col md:flex-row items-center gap-6 w-full max-w-lg">
                {/* Sign Up Button */}
                <button
                    onClick={() => navigate("/signup")}
                    className="w-full md:w-1/2 bg-green-700 text-white p-4 rounded-lg font-semibold shadow-md hover:bg-green-900 transition-all"
                >
                    Sign Up
                    <p className="text-sm font-light mt-1">Create your account & start your journey</p>
                </button>

                {/* Login Button */}
                <button
                    onClick={() => navigate("/login")}
                    className="w-full md:w-1/2 bg-white text-gray-900 p-4 rounded-lg font-semibold shadow-md border border-gray-300 hover:bg-gray-100 transition-all"
                >
                    Log in
                    <p className="text-sm font-light mt-1">Already have an account? Continue</p>
                </button>
            </div>
        </div>
    );
};

export default Welcome;
