import React from 'react';
import Cv from '../images/CV2.png';

function NavBar() {
    const openImageInNewWindow = () => {
        // Open the CV image in a new window
        window.open(Cv, '_blank', 'width=800,height=600');
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <button
                onClick={openImageInNewWindow}
                className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
                My Resume for Job
            </button>
        </div>
    );
}

export default NavBar;
