import React, { FormEvent, useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { TipsOption } from "../../types/types";
import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { StyledForm, Title, Subtitle, Total, InputGroup } from "./style";

const options: TipsOption[] = [
  { value: 10, label: "10 %" },
  { value: 15, label: "15 %" },
  { value: 20, label: "20 %" },
];

export const Form = () => {
  const bill = useInput();
  const person = useInput();

  const [total, setTotal] = useState(0);

  const [selectedValue, setValue] = useState<TipsOption>(options[0]);

  const [isButtonDisabled, setisDisabledButton] = useState(true);

  const onChange = (event: TipsOption | null) => {
    if (event) {
      setValue(event);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const totalTips =
      Number(bill.value) +
      Number(bill.value) * (Number(selectedValue.value) / 100);
    const amountBill = totalTips / Number(person.value);
    setTotal(amountBill);
  };

  useEffect(() => {
    bill.value && person.value
      ? setisDisabledButton(false)
      : setisDisabledButton(true);
  }, [bill.value, person.value]);

  return (
    <StyledForm onSubmit={handleSubmit}>
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
          placeholder="Enter persons"
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
      <Total>Total:${total.toFixed(2)}$</Total>
      <Button type="submit" isDisabled={isButtonDisabled} />
    </StyledForm>
  );
};
