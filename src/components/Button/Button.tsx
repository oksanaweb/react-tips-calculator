import { type } from "os";
import React from "react";
import { StyledButton } from "./styles";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  handleTotal: () => void;
  type: ButtonType;
  buttonDisabled: boolean;
}

export const Button = ({ type, handleTotal, buttonDisabled }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={handleTotal} disabled={buttonDisabled}>
      Ohhhoooo 🍻
    </StyledButton>
  );
};
