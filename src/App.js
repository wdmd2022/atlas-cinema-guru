import './App.css';
import Input from './components/general/Input.js';
import SelectInput from './components/general/SelectInput.js';
import Button from './components/general/Button.js';
import SearchBar from './components/general/SearchBar.js';
import { faKey } from '@fortawesome/free-solid-svg-icons';

// import { useState, useEffect } from 'react';
// import axios from 'axios';
import Authentication from './routes/auth/Authentication.js';
// import Dashboard from './routes/dashboard/Dashboard.js';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userUsername, setUserUsername] = useState("");
  // const [accessToken, setAccessToken] = useState("");
  // useEffect(() => {
  //   const localToken = localStorage.getItem('accessToken');
  //   if (localToken) {
  //     setAccessToken(localToken);
  //     axios.post('http://localhost:8000/api/auth/', {}, {
  //       headers: {
  //         Authorization: `Bearer ${localToken}`
  //       }
  //     }).then(response => {
  //       setIsLoggedIn(true);
  //       setUserUsername(response.data.username);
  //     })
  //   }
  // })
  return (
    <div className="App">
      <Input    type="text"
                label="Password"
                value="value"
                setValue="()=>{}"
                icon={faKey}
                className="input-light"
            />
      <Input    type="text"
                label="Password"
                value="value"
                setValue="()=>{}"
                icon={faKey}
                className="input-light input-error"
            />
      <Input    type="text"
                label="Password"
                value="value"
                setValue="()=>{}"
                icon={faKey}
                className="input-dark"
            />
      <Input    type="text"
                label="Password"
                value="value"
                setValue="()=>{}"
                icon={faKey}
                className="input-dark input-error"
            />
      <SelectInput  label="sort"
                    options={["opt1", "opt2"]}
                    className="select-dark"
                    value="value"
                    setValue="()=>{}"
                />
      <Button       label="Sign Up"
                    className="button"
                    onClick="()=>{}"
                    icon={faKey}
                />
      <SearchBar />
      {/* {isLoggedIn ? <Dashboard /> : <Authentication />} */}
      <Authentication setUserUsername="()=>{}" setIsLoggedIn="()=>{}" />
    </div>
  );
}

export default App;
