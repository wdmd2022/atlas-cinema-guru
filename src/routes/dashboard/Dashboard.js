import './dashboard.css';
import Header from '../../components/navigation/Header';
import React from 'react';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
    return (
        <div>
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
            <div className='dash'>
                
            </div>
        </div>
    )
}

export default Dashboard;
