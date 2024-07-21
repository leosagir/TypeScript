import React, { useState, useEffect } from 'react';
import logo from './logo192.png';
import './header.css';

const Header: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header>
      <img src={logo} alt={'result'} />
      <h3>Главное меню</h3>
      <span>time: {currentTime}</span>
    </header>
  );
};

export default Header;