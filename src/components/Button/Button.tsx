import React from 'react';
import cls from './Button.module.scss';
import './Button.css';

const Button: React.FC = ({ children }) => (
  <button className={`${cls.button} button`}>
    {children}
  </button>
);

export default Button;
