import React, { useState } from "react";
import styled from "styled-components";

export const StyledInput = styled.input`
  border: 1px solid green;
  &:hover {
    border: 1px solid red;
  }
`;

const Input = (props: any): JSX.Element => {
  const [value, setValue] = useState("");

  return (
    <StyledInput
      onChange={(e) => setValue(e.target.value)}
      value={value}
      {...props}
    />
  );
};

export default Input;
