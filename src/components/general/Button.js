import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Button = ({ label, className, onClick, icon, type }) => {
    return (
        <button className={className} onClick={onClick} type={type}>
            {icon && <FontAwesomeIcon icon={icon} className="button-icon" />}
            {label}
        </button>
    );
}

export default Button;
