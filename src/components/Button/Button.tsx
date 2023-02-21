import { type } from "os";
import React, { ButtonHTMLAttributes, FormEvent } from "react";
import { StyledButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled: boolean;
}

export const Button = ({ isDisabled }: ButtonProps) => {
  return <StyledButton disabled={isDisabled}>Ohhhoooo 🍻</StyledButton>;
};
