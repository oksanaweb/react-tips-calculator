import React from "react";
import Select, { SingleValue } from "react-select";
import { TipsOption } from "../../types/types";
import { selectStyles } from "./style";

interface SelectProps {
  options: TipsOption[];
  value: TipsOption;
  onChange: (option: TipsOption) => void;
}

export const CustomSelect = ({ value, onChange, options }: SelectProps) => {
  const handleTips = (option: SingleValue<TipsOption>): void => {
    if (option) onChange(option);
  };

  return (
    <Select
      options={options}
      styles={selectStyles}
      onChange={handleTips}
      value={value}
      isMulti={false}
    />
  );
};
