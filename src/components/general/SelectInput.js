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
                {options.map((option, key) => {
                    return <option value={option.value} key={key}>{option.label}</option>
                })}
            </select>
        </div>
    );
}

export default SelectInput;
