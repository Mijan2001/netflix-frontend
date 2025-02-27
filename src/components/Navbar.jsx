import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../firebase';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        firebase ? true : false
    );
    console.log('isAuthenticated===', isAuthenticated);
    const navigate = useNavigate();
    const handleLogin = loginType => {
        if (loginType === 'signin') {
            navigate('/signin');
        } else {
            navigate('/signup');
        }
    };
    return (
        <>
            <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
                <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
                    <Link to="/">NETFLIX </Link>
                </h1>
                <div>
                    <button
                        onClick={() => handleLogin('signin')}
                        className="text-white pr-4 cursor-pointer"
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => handleLogin('signup')}
                        className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white "
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
