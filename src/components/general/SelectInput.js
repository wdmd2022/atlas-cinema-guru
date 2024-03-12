import React from 'react';
import './general.css';

const SelectInput = ({ label, options, className, value, setValue }) => {
    const handleSelect = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className={`select-container ${className}`}>
            <label>{label}:</label>
            <select value={value} onChange={handleSelect}>
                {options.map((option) => {
                    return <option value={option} key={option}>{option}</option>
                })}
            </select>
        </div>
    );
}

export default SelectInput;
