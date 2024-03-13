import './auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Register = ({ username, password, setUsername, setPassword }) => {

    return (
        <div className='auth-section'>
            <p> Create a new Account </p>
            <div className="auth-input">
                <Input icon={faUser} label="Username" type="text" className="input-light" value={username} setValue={setUsername} />
                <Input icon={faKey} label="Password" type="password" className="input-light" value={password} setValue={setPassword} />
            </div>
            <div className='auth-submit'>
                <Button label="Sign Up" className="button" icon={faPlus} type="submit" />
            </div>
        </div>
    );
}

export default Register;
