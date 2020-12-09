import React from "react";
import styled from "styled-components";
import Tooltip from ".";
import { waitFor, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

const PositioningElement = styled.div`
  margin: 8rem;
`;

export const tooltip = () => {
  const targetElement = (
    <a href="#" onClick={(e) => e.preventDefault()}>
      Hover Over Me
    </a>
  );
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <PositioningElement>
        <Tooltip targetElement={targetElement} data-test="hover">
          <div>Tip Content</div>
        </Tooltip>
      </PositioningElement>
    </div>
  );
};

const parameters = {
  eyes: {
    runBefore({ rootEl }) {
      within(rootEl)
        .getAllByText("Hover Over Me")
        .forEach((el) => {
          userEvent.hover(el);
          return waitFor(() => within(rootEl).getByText("Tip Content"));
        });
    },
  },
};

tooltip.parameters = parameters;

export default {
  title: "Eyes Tooltip",
};
