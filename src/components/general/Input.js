import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
    const id = `${label.replace(/\s+/g, '')}`
    const handleInput = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className={`input-container ${className}`}>
            <div className="label-container">
                {icon && <FontAwesomeIcon icon={icon} className="input-icon" />}
                <label htmlFor={id}>{label}:</label>
            </div>
            <input id={id} type={type} value={value} onChange={handleInput} {...inputAttributes} />
        </div>
    );
}

export default Input;
