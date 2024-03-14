import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<HomePage />} />
            {/* <Route path="/favorites" element={<Favorites />} />
            <Route path="/watchlater" element={<WatchLater />} /> */}
            <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <div>
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
            <div className='dash'>
                <SideBar />
            </div>
        </div>
        </BrowserRouter>
    )
}

export default Dashboard;
