import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Authentication from './routes/auth/Authentication.js';
import Dashboard from './routes/dashboard/Dashboard.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    const localToken = localStorage.getItem('accessToken');
    if (localToken) {
      setAccessToken(localToken);
      axios.post('http://localhost:8000/api/auth/', {}, {
        headers: {
          Authorization: `Bearer ${localToken}`
        }
      }).then(response => {
        setIsLoggedIn(true);
        setUserUsername(response.data.username);
      })
    }
  })
  return (
    <div className="App">
      {isLoggedIn ? <Dashboard /> : <Authentication />}
    </div>
  );
}

export default App;
