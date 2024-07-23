import React from 'react';
import './myButton.css';

interface MyButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name?: string;
}

const MyButton: React.FC<MyButtonProps> = ({ type, onClick, name = 'undefined' }) => {
  return (
    <button onClick={onClick} className="myButton" type={type}>
      {name}
    </button>
  );
}

export default MyButton;