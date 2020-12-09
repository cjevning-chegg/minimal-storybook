import React, { useState } from "react";
import styled from "styled-components";

export const TooltipWrapper = styled.span`
  position: relative;
  display: inline-block;
`;

export const TooltipPane = styled.div<{
  isShown: boolean;
}>`
  position: absolute;
  display: ${({ isShown }) => (isShown ? "inline-flex" : "none")};
  z-index: 100;
  flex-direction: column;
  padding: 1rem;
  text-align: left;
  background-color: black;
  color: white;
`;

const Tooltip = ({ children, targetElement }: any): JSX.Element => {
  const [isShown, setIsShown] = useState(false);

  return (
    <TooltipWrapper
      onMouseLeave={() => setIsShown(false)}
      onMouseOver={() => setIsShown(true)}
    >
      {React.cloneElement(targetElement, {
        onMouseLeave: () => setIsShown(false),
        onMouseOver: () => setIsShown(true),
      })}
      <TooltipPane isShown={isShown} role="tooltip">
        {children}
      </TooltipPane>
    </TooltipWrapper>
  );
};

export default Tooltip;
