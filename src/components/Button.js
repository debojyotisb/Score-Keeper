import React from "react";

const Button = ({ text, onClick, variant = "primary" }) => {
  const baseStyles = "px-4 py-2 font-semibold rounded transition-all duration-300";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    danger: "bg-red-500 text-white hover:bg-red-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
