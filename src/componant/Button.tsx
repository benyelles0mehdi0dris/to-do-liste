import React from 'react';

interface ButtonProps {
  text: string; 
  onClick: () => void; 
  bgColorClass?: string; 
  textColorClass?: string;
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  bgColorClass = 'bg-blue-500', 
  textColorClass = 'text-white', 
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${bgColorClass} ${textColorClass} focus:outline-none focus:ring focus:ring-blue-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
