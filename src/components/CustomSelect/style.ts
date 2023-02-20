import { StylesConfig } from "react-select";
import { OptionsTypes } from "../../types/types";

export const selectStyles: StylesConfig<OptionsTypes> = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    border: "none",
    borderRadius: "30px",
    height: "70px",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    fontSize: "18px",
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    border: "none",
    boxShadow: "none",
  }),
  option: (baseStyles) => ({
    ...baseStyles,
    display: "grid",
    placeItems: "center",
  }),
};
