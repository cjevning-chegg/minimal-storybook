import React, { useState } from "react";
import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  border: 1px solid green;
  &:hover {
    border: 1px solid red;
  }
`;

const Textarea = (props: any): JSX.Element => {
  const [value, setValue] = useState("");

  return (
    <StyledTextarea
      onChange={(e) => {
        setValue(e.target.value);
        const tag = document.createElement("p");
        const text = document.createTextNode("onchange");
        tag.appendChild(text);
        e.target.parentElement!.appendChild(tag);
      }}
      value={value}
      {...props}
    />
  );
};

export default Textarea;
