import React from 'react';
import cls from './Button.module.scss';
import './Button.css';

const Button: React.FC = ({ children, ...rest }) => (
  <button className={`${cls.button} button`} {...rest}>
    {children}
  </button>
);

export default Button;
