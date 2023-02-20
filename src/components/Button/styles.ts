import styled from "styled-components";

const StyledButton = styled.button`
  padding: 15px;
  background: #2ed2c9;
  color: #ffffff;
  font-size: 24px;
  border: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  transition: transform 0.2s;

  &:active {
    box-shadow: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export { StyledButton };
