// this will be parent of Login and Register components
import './auth.css';
import { useState } from 'react';
import Button from '../../components/general/Button.js';

const Authentication = ({ setUserUsername, setIsLoggedIn }) => {
    const [_switch, set_Switch] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <form className='auth-header'>
                <Button label="Sign In" className="button auth-button" onClick={() => set_Switch(true)} />
                <Button label="Sign Up" className="button auth-button" onClick={() => set_Switch(false)} />
            </form>
        </div>
    );
}

export default Authentication;
