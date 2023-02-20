import React from "react";
import Select from "react-select";
import { OptionsTypes } from "../../types/types";
import { selectStyles } from "./style";

interface SelectProps {
  options: OptionsTypes[];
  value: OptionsTypes;
  onChange: (event: OptionsTypes | null) => void;
}

export const CustomSelect = ({ options, value, onChange }: SelectProps) => {
  return (
    <Select
      options={options}
      styles={selectStyles}
      onChange={onChange}
      value={value}
      isMulti={false}
    />
  );
};
