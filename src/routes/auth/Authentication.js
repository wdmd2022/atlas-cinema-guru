// this will be parent of Login and Register components
import './auth.css';
import { useState } from 'react';
import Button from '../../components/general/Button.js';
import Login from './Login.js';
import Register from './Register.js';
import axios from 'axios';

const Authentication = ({ setUserUsername, setIsLoggedIn }) => {
    const [_switch, set_Switch] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (onSubmit) => {
        onSubmit.preventDefault();
        if (_switch) {
            axios.post('http://localhost:8000/api/auth/login', { username, password }).then((response) => {
                localStorage.setItem('token', response.data.accessToken);
                setUserUsername(username);
                setIsLoggedIn(true);
                console.log(response);
                console.log(response.data.message);
                console.log(response.data.accessToken);
            }).catch((err) => {
                console.log(err.message);
                console.log(err);
                console.log(err.response.data.message);
            });
        } else {
            axios.post('http://localhost:8000/api/auth/register', { username, password }).then((response) => {
                localStorage.setItem('token', response.data.accessToken);
                setUserUsername(username);
                setIsLoggedIn(true);
                console.log(response);
                console.log(response.data.message);
                console.log(response.data.accessToken);
            }).catch((err) => {
                console.log(err.message);
                console.log(err);
                console.log(err.response.data.message);
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='auth-header' >
                <Button label="Sign In" className={_switch? "button auth-button light-red" : "button auth-button dark-red"} onClick={() => set_Switch(true)} type="button" />
                <Button label="Sign Up" className={_switch? "button auth-button dark-red" : "button auth-button light-red"} onClick={() => set_Switch(false)} type="button" />
            </div>
            <div className='auth-form'>
                {_switch ?
                <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
                :
                <Register username={username} password={password} setUsername={setUsername} setPassword={setPassword} /> }
            </div>
        </form>
    );
}

export default Authentication;
