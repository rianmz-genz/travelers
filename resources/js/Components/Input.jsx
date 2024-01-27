import React from "react";

const Input = ({
  type = "text",
  placeholder,
  className = "w-full",
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`rounded-md border-none focus:outline-none px-4 py-2 ${className}`}
      {...props}
    />
  );
};

export default Input;
