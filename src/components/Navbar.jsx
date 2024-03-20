import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 p-4 absolute top-0 w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-between">
                <div className="flex items-center p-2">
                    <Link to="/" className="text-white text-3xl font-bold">
                        Fashion Hub
                    </Link>
                </div>
                <div className="flex items-center space-x-12">
                    <Link to="/about" className="text-white text-2xl">
                        About
                    </Link>
                    <Link to="/store" className="text-white text-2xl">
                        Store
                    </Link>
                    <Link to="/contact" className="text-white text-2xl">
                       Contact
                    </Link>
                    <div className="flex items-center space-x-5">
                    <Link to="/login" className="text-white text-1xl">
                       Login & Register
                    </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
