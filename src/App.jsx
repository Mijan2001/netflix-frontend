import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Main from './components/Main';

const App = () => {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
