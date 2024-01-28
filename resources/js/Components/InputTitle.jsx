import React from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";

const InputTitle = ({
  name,
  value,
  onChange,
  required = false,
  placeholder,
  label,
  type,
}) => {
  return (
    <div className="w-full">
      <InputLabel htmlFor={name} value={label} />
      <TextInput
        id={name}
        className="mt-1 block w-full"
        required={required}
        value={value}
        isFocused
        name={name}
        onChange={onChange}
        autoComplete={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default InputTitle;
