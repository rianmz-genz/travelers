import React from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import Textarea from "./Textarea";

const TextareaTitle = ({
  name,
  value,
  onChange,
  required = true,
  placeholder,
  label,
  type,
}) => {
  return (
    <div className="w-full">
      <InputLabel htmlFor={name} value={label} />
      <Textarea
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

export default TextareaTitle;
