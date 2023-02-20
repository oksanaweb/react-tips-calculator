import React, { useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { OptionsTypes } from "../../types/types";
import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { StyledForm, Title, Subtitle, Total, InputGroup } from "./style";

const options: OptionsTypes[] = [
  { value: 10, label: "10 %" },
  { value: 15, label: "15 %" },
  { value: 20, label: "20 %" },
];

export const Form = () => {
  const bill = useInput();
  const person = useInput();

  const [total, setTotal] = useState(0);

  const [selectedValue, setValue] = useState<OptionsTypes>(options[0]);

  const onChange = (event: OptionsTypes | null) => {
    if (event) {
      setValue(event);
    }
  };

  const handleTips = () => {
    const totalTips =
      Number(bill.value) +
      Number(bill.value) * (Number(selectedValue.value) / 100);
    const amountBill = totalTips / Number(person.value);
    setTotal(amountBill);
  };

  const [buttonDisabled, setDisabledButton] = useState(true);

  useEffect(() => {
    bill.value && person.value
      ? setDisabledButton(false)
      : setDisabledButton(true);
  }, [bill.value, person.value]);

  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <InputGroup>
        <Input
          placeholder="Enter bill"
          type="number"
          {...bill}
          onChange={bill.OnChange}
        />
        <Input
          placeholder="Enter  persons"
          type="number"
          {...person}
          onChange={person.OnChange}
        />
        <CustomSelect
          value={selectedValue}
          onChange={onChange}
          options={options}
        />
      </InputGroup>
      <Total>{`Total:${total.toFixed(2)}$`}</Total>
      <Button
        type="button"
        handleTotal={handleTips}
        buttonDisabled={buttonDisabled}
      />
    </StyledForm>
  );
};
