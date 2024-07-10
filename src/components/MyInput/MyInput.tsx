import React from 'react';
import './MyInput.css';

interface MyInputProps {
    id: string;
    name: string;
    label: string;
    type: string;
    placeholder: string;
}

const MyInput: React.FC<MyInputProps> = ({ id, name, label, type, placeholder }) => {
    return (
        <div className="inputWrapper">
            <label htmlFor={name}>{label}</label>
            <input 
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                className="myInput"
            />
        </div>
    );
}

export default MyInput;
