import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { StyledInput } from "./style";

interface InputProps {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, onChange, value, type }: InputProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
    />
  );
};
