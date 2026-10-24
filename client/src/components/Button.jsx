import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyle = 'px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-sm focus:outline-none';
  
  const variants = {
    primary: 'bg-[#C05D43] text-white hover:bg-[#a64e38] hover:shadow-md',
    secondary: 'bg-[#1D3557] text-white hover:bg-[#152741] hover:shadow-md',
    outline: 'border border-[#C05D43] text-[#C05D43] hover:bg-[#C05D43] hover:text-white',
    ghost: 'text-[#1D3557] hover:bg-[#F1FAEE]'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
